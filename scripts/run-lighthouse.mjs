import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { execFileSync, spawn } from "node:child_process";
import process from "node:process";
import lighthouse from "lighthouse";
import desktopConfig from "lighthouse/core/config/desktop-config.js";
import { launch } from "chrome-launcher";

const PORT = Number(process.env.LIGHTHOUSE_PORT || 3100 + Math.floor(Math.random() * 200));
const HOST = "127.0.0.1";
const baseUrl = `http://${HOST}:${PORT}`;
const reportDir = path.resolve("lighthouse-reports");
const chromeProfileDir = path.resolve(".lighthouse-chrome-profile");

const audits = [
  {
    name: "desktop",
    url: `${baseUrl}/`,
    config: desktopConfig,
    thresholds: {
      performance: 0.75,
      accessibility: 0.9,
      "best-practices": 0.9,
      seo: 0.9,
    },
  },
  {
    name: "mobile",
    url: `${baseUrl}/`,
    config: undefined,
    thresholds: {
      performance: 0.55,
      accessibility: 0.9,
      "best-practices": 0.9,
      seo: 0.9,
    },
  },
];

function getServerCommand() {
  if (process.env.LIGHTHOUSE_SERVER_COMMAND) {
    return process.env.LIGHTHOUSE_SERVER_COMMAND;
  }

  const hasBuild = existsSync(path.resolve(".next", "BUILD_ID"));
  if (hasBuild) {
    return `npm run start -- --hostname ${HOST} --port ${PORT}`;
  }

  return `npm run dev -- --hostname ${HOST} --port ${PORT}`;
}

function spawnShell(command) {
  if (process.platform === "win32") {
    return spawn("cmd.exe", ["/d", "/s", "/c", command], {
      stdio: "pipe",
      env: process.env,
      windowsHide: true,
    });
  }

  return spawn("sh", ["-lc", command], {
    stdio: "pipe",
    env: process.env,
  });
}

function killProcessTree(childProcess) {
  if (!childProcess || childProcess.killed) {
    return;
  }

  try {
    if (process.platform === "win32") {
      execFileSync("taskkill", ["/pid", String(childProcess.pid), "/t", "/f"], {
        stdio: "ignore",
      });
      return;
    }

    process.kill(-childProcess.pid, "SIGKILL");
  } catch (error) {
    console.warn(`Server cleanup warning: ${error.message}`);
  }
}

async function waitForServer(url, timeoutMs = 120000) {
  const startedAt = Date.now();

  while (Date.now() - startedAt < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return;
      }
    } catch {
      // Keep polling until the app is ready.
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  throw new Error(`Timed out waiting for ${url}`);
}

async function runAudit(chrome, audit) {
  const runnerResult = await lighthouse(
    audit.url,
    {
      port: chrome.port,
      output: "html",
      logLevel: "error",
      onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
      chromeFlags: ["--headless=new", "--no-sandbox"],
    },
    audit.config,
  );

  const scores = Object.fromEntries(
    Object.entries(runnerResult.lhr.categories).map(([key, value]) => [key, value.score ?? 0]),
  );

  const htmlPath = path.join(reportDir, `${audit.name}.html`);
  const jsonPath = path.join(reportDir, `${audit.name}.json`);

  await fs.writeFile(htmlPath, runnerResult.report);
  await fs.writeFile(jsonPath, JSON.stringify(runnerResult.lhr, null, 2));

  console.log(`\nLighthouse ${audit.name} scores`);
  for (const [category, score] of Object.entries(scores)) {
    const rounded = Math.round(score * 100);
    console.log(`- ${category}: ${rounded}`);

    if (score < audit.thresholds[category]) {
      throw new Error(
        `Lighthouse ${audit.name} score for ${category} is ${rounded}, below threshold ${Math.round(
          audit.thresholds[category] * 100,
        )}.`,
      );
    }
  }
}

let serverProcess;
let chrome;

try {
  await fs.mkdir(reportDir, { recursive: true });
  await fs.mkdir(chromeProfileDir, { recursive: true });

  const serverCommand = getServerCommand();
  console.log(`Starting server: ${serverCommand}`);
  serverProcess = spawnShell(serverCommand);

  serverProcess.stdout.on("data", (chunk) => process.stdout.write(chunk));
  serverProcess.stderr.on("data", (chunk) => process.stderr.write(chunk));

  await waitForServer(baseUrl);

  chrome = await launch({
    userDataDir: chromeProfileDir,
    chromeFlags: ["--headless=new", "--no-sandbox"],
  });

  for (const audit of audits) {
    await runAudit(chrome, audit);
  }

  console.log(`\nLighthouse reports written to ${reportDir}`);
} finally {
  if (chrome) {
    try {
      await chrome.kill();
    } catch (error) {
      console.warn(`Chrome cleanup warning: ${error.message}`);
    }
  }

  if (serverProcess && !serverProcess.killed) {
    killProcessTree(serverProcess);
  }

  try {
    await fs.rm(chromeProfileDir, { recursive: true, force: true });
  } catch (error) {
    console.warn(`Profile cleanup warning: ${error.message}`);
  }
}
