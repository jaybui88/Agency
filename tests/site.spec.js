const { test, expect } = require("@playwright/test");

const primaryPages = [
  { path: "/", heading: /An ninh vận hành theo chuẩn doanh nghiệp hiện đại/i },
  { path: "/gioi-thieu", heading: /Một đơn vị bảo vệ chuyên nghiệp phải tạo ra cảm giác yên tâm/i },
  { path: "/dich-vu", heading: /Danh mục dịch vụ được thiết kế linh hoạt/i },
  { path: "/nang-luc", heading: /Năng lực dịch vụ được thể hiện rõ nhất/i },
  { path: "/du-an", heading: /Mỗi dự án là một minh chứng rõ ràng/i },
  { path: "/lien-he", heading: /Trao đổi nhu cầu của bạn để chúng tôi đề xuất/i },
];

test.describe("ShieldGuard website", () => {
  for (const pageDef of primaryPages) {
    test(`renders ${pageDef.path}`, async ({ page }) => {
      await page.goto(pageDef.path);
      await expect(page.getByRole("heading", { level: 1 })).toContainText(pageDef.heading);
      await expect(page.getByRole("banner")).toBeVisible();
      await expect(page.getByRole("contentinfo")).toBeVisible();
    });
  }

  test("desktop navigation highlights and routes correctly", async ({ page, isMobile }) => {
    test.skip(isMobile, "Desktop navigation assertions should only run on desktop layouts.");

    await page.goto("/");

    const serviceLink = page.getByRole("link", { name: "Dịch vụ" }).first();
    await serviceLink.click();

    await expect(page).toHaveURL(/\/dich-vu$/);
    await expect(page.getByRole("link", { name: "Dịch vụ" }).first()).toHaveAttribute("aria-current", "page");
  });

  test("mobile menu opens, closes, and navigates", async ({ page, isMobile }) => {
    test.skip(!isMobile, "This scenario is only relevant on mobile.");

    await page.goto("/");
    const menuButton = page.getByRole("button", { name: /mo menu|dong menu/i });
    await menuButton.click();

    await expect(page.getByRole("link", { name: "Dự án" }).first()).toBeVisible();
    await page.getByRole("link", { name: "Dự án" }).first().click();

    await expect(page).toHaveURL(/\/du-an$/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/Mỗi dự án là một minh chứng rõ ràng/i);
  });

  test("homepage gallery and project images are visible", async ({ page }) => {
    await page.goto("/");

    const images = page.locator("img");
    await expect(images.first()).toBeVisible();
    expect(await images.count()).toBeGreaterThan(5);

    await expect(page.getByText("HÌNH ẢNH CÔNG TY")).toBeVisible();
    await expect(page.getByText("Khách hàng và dự án", { exact: false })).toBeVisible();
  });

  test("contact form accepts user input", async ({ page }) => {
    await page.goto("/lien-he");

    await page.getByLabel("Họ và tên").fill("Nguyễn Văn An");
    await page.getByLabel("Số điện thoại").fill("0900123456");
    await page.getByLabel("Loại hình cần bảo vệ").selectOption("Sự kiện");
    await page.getByLabel("Yêu cầu chi tiết").fill("Cần tư vấn bảo vệ sự kiện ra mắt sản phẩm.");

    await expect(page.getByLabel("Họ và tên")).toHaveValue("Nguyễn Văn An");
    await expect(page.getByLabel("Số điện thoại")).toHaveValue("0900123456");
    await expect(page.getByLabel("Yêu cầu chi tiết")).toHaveValue(/ra mắt sản phẩm/i);
  });
});
