
const { test, expect } = require("@playwright/test");

test("Alt Text", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Verify company branding
    const branding = page.getByAltText("company-branding");
    await expect(branding).toBeVisible({ timeout: 10000 });

    console.log("Company branding is visible");

    // Login
    await page.getByRole("textbox", { name: "Username" }).fill("Admin");
    await page.getByRole("textbox", { name: "Password" }).fill("admin123");
    await page.getByRole("button", { name: "Login" }).click();

    // Verify dashboard heading
    await expect(
        page.getByRole("heading", { name: "Dashboard" })
    ).toBeVisible({ timeout: 15000 });

    console.log("Dashboard is visible");
    page.close();
    

});
