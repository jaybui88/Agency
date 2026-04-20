const { test, expect } = require("@playwright/test");

test.describe("Visual regression", () => {
  test("homepage desktop matches snapshot", async ({ page, isMobile }) => {
    test.skip(isMobile, "Desktop-only visual baseline.");

    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await page.setViewportSize({ width: 1440, height: 2400 });
    await expect(page.locator(".hero")).toHaveScreenshot("homepage-hero-desktop.png", {
      animations: "disabled",
      timeout: 15000,
    });
  });

  test("homepage mobile matches snapshot", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Mobile-only visual baseline.");

    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await expect(page.locator(".hero")).toHaveScreenshot("homepage-hero-mobile.png", {
      animations: "disabled",
      timeout: 15000,
    });
  });

  test("services page desktop matches snapshot", async ({ page, isMobile }) => {
    test.skip(isMobile, "Desktop-only visual baseline.");

    await page.goto("/dich-vu");
    await page.waitForLoadState("networkidle");
    await page.setViewportSize({ width: 1440, height: 2200 });
    await expect(page.locator("main")).toHaveScreenshot("services-main-desktop.png", {
      animations: "disabled",
      timeout: 15000,
    });
  });
});
