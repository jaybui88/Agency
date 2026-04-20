const { test, expect } = require("@playwright/test");

const pageChecks = [
  {
    path: "/",
    title: /ShieldGuard Security/i,
    description: /công ty bảo vệ|dịch vụ bảo vệ|website next\.js/i,
  },
  {
    path: "/gioi-thieu",
    title: /Giới thiệu/i,
    description: /giới thiệu công ty bảo vệ|cam kết dịch vụ/i,
  },
  {
    path: "/dich-vu",
    title: /Dịch vụ/i,
    description: /danh mục dịch vụ bảo vệ|nhà máy|công trường/i,
  },
  {
    path: "/nang-luc",
    title: /Năng lực/i,
    description: /quy trình vận hành|đào tạo nhân sự/i,
  },
  {
    path: "/du-an",
    title: /Dự án/i,
    description: /mô hình triển khai bảo vệ|nhà máy|tòa nhà/i,
  },
  {
    path: "/lien-he",
    title: /Liên hệ/i,
    description: /tư vấn giải pháp bảo vệ|báo giá/i,
  },
];

test.describe("SEO and performance quality", () => {
  for (const pageCheck of pageChecks) {
    test(`seo basics are correct for ${pageCheck.path}`, async ({ page }) => {
      const response = await page.goto(pageCheck.path);

      expect(response?.ok()).toBeTruthy();
      await expect(page).toHaveTitle(pageCheck.title);

      const description = page.locator('meta[name="description"]');
      await expect(description).toHaveAttribute("content", pageCheck.description);

      const headingCount = await page.locator("h1").count();
      expect(headingCount).toBe(1);

      const imageCount = await page.locator("img").count();
      if (imageCount > 0) {
        const missingAltImages = page.locator("img:not([alt]), img[alt='']");
        expect(await missingAltImages.count()).toBe(0);
      }
    });
  }

  test("homepage performance stays within healthy local thresholds", async ({ page }) => {
    await page.goto("/");

    await page.waitForLoadState("networkidle");

    const metrics = await page.evaluate(() => {
      const nav = performance.getEntriesByType("navigation")[0];
      const resources = performance.getEntriesByType("resource");

      return {
        domContentLoaded: Math.round(nav.domContentLoadedEventEnd),
        loadComplete: Math.round(nav.loadEventEnd),
        resourceCount: resources.length,
        imageCount: document.images.length,
      };
    });

    expect(metrics.domContentLoaded).toBeLessThan(3000);
    expect(metrics.loadComplete).toBeLessThan(5000);
    expect(metrics.resourceCount).toBeLessThan(80);
    expect(metrics.imageCount).toBeGreaterThan(5);
  });

  test("homepage includes strong crawlable content signals", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("main")).toContainText(/dịch vụ bảo vệ/i);
    await expect(page.locator("main")).toContainText(/hình ảnh công ty/i);
    await expect(page.locator("main")).toContainText(/khách hàng và dự án/i);

    const internalLinks = await page.locator('a[href^="/"]').count();
    expect(internalLinks).toBeGreaterThanOrEqual(6);
  });
});
