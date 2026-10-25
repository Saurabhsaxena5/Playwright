
const { test, expect } = require("@playwright/test");

test("Role Test", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    // get by Alt text
     const branding = page.getByAltText("company-branding");

    // Wait until company branding becomes visible
    await expect(branding).toBeVisible({ timeout: 10000 });

    console.log("Company branding is visible");
    //Get by Role
    await page.getByRole("textbox", { name: "Username" }).fill("Admin");
    await page.getByRole("textbox", { name: "Password" }).fill("admin123");
    await page.getByRole("button", { name: "Login" }).click();

})
