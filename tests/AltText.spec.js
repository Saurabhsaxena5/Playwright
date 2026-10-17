
const { test, expect } = require("@playwright/test");

test("Alt Text", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Get by Alt Text
    const branding = page.getByAltText("company-branding");
    await expect(branding).toBeVisible({ timeout: 10000 });

    console.log("Company branding is visible");

    // Get by Role
    await page.getByRole("textbox", { name: "Username" }).fill("Admin");
    await page.getByRole("textbox", { name: "Password" }).fill("admin123");
    await page.getByRole("button", { name: "Login" }).click();

    // Verify Dashboard
    const dashboardUser = page.getByText("Paul Collings");
    await expect(dashboardUser).toBeVisible({ timeout: 10000 });

    console.log("Dashboard is visible");

});
