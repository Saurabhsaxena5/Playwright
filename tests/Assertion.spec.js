const { test, expect } = require("@playwright/test");

test("Assertion Test", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Verify URL
    await expect(page).toHaveURL(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    // Verify page title
    await expect(page).toHaveTitle(/OrangeHRM/);

    // Enter username
    await page.locator("//input[@placeholder='Username']").fill("Admin");

    // Enter password
    await page.locator("//input[@placeholder='Password']").fill("admin123");

    // Click Login
    await page.locator("//button[@type='submit']").click();

    // Wait for successful login by checking Dashboard
    await expect(
        page.locator("//p[@class='oxd-userdropdown-name']")
    ).toBeVisible({ timeout: 30000 });

    await page.locator("//span[normalize-space()='My Info']").click();
        
     await page.locator('.oxd-layout-context').evaluate((el) => {
     el.scrollTop += 500;
    });

// Male radio button ko locate karo
    const radiobutton = page.locator("//label[normalize-space()='Male']");



// Radio button par click karo
    await radiobutton.click();

// Verify karo ki radio button select hua hai
    await expect(radiobutton.locator("input[type='radio']"))
    .toBeChecked({ timeout: 5000 });

    await page.waitForTimeout(2000);

    await page.locator("//div[@class='orangehrm-edit-employee-name']");

    await expect(page.locator("//div[@class='orangehrm-edit-employee-name']")).toHaveText("manda user");

    await expect(page.locator("//div[@class='orangehrm-edit-employee-name']")).toContainText("manda user");


     const clickinAdmin = page.locator(
    "//span[normalize-space()='Admin']"
);

    await clickinAdmin.click({ timeout: 10000 });


   const searchInput = page.locator(
    "//label[normalize-space()='Username']/following::input[1]"
);

    await searchInput.fill("Admin");
    await expect(searchInput).toHaveValue("Admin");

    await page.close(); 

})