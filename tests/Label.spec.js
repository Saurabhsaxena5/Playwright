const { test,expect } = require("@playwright/test");

test("Labeltest", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //login page 
     await page.getByRole("textbox", { name: "Username" }).fill("Admin");
    await page.getByRole("textbox", { name: "Password" }).fill("admin123");
    await page.getByRole("button", { name: "Login" }).click();

    // Verify dashboard heading
    await expect(
        page.getByRole("heading", { name: "Dashboard" })
    ).toBeVisible({ timeout: 15000 });


    // Verify login form labels
    await expect(page.getByLabel("Username")).toBeVisible();
    await expect(page.getByLabel("Password")).toBeVisible();
    await expect(page.getByRole("button", { name: "Login" })).toBeVisible();

    console.log("Login form labels are visible");

    await page.locator("//span[normalize-space()='My Info']").click();

    

})