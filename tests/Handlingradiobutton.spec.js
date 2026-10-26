
const { test, expect } = require("@playwright/test");

test("Handling Radio Button Test", async ({ page }) => {

    // Open OrangeHRM login page
    await page.goto(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    // Enter username
    await page.locator("//input[@placeholder='Username']").fill("Admin");

    // Enter password
    await page.locator("//input[@placeholder='Password']").fill("admin123");

    // Click Login button
    await page.locator("//button[@type='submit']").click();

    // Verify successful login
    await expect(
        page.locator("//p[@class='oxd-userdropdown-name']")
    ).toBeVisible({ timeout: 30000 });

    // Click My Info
    await page.locator("//span[normalize-space()='My Info']").click();

    // Scroll down to the Personal Details section
    await page.locator(".oxd-layout-context").evaluate((el) => {
        el.scrollTop += 500;
    });

    // Locate the Male radio button
    const radiobutton = page.locator(
        "//label[normalize-space()='Male']"
    );

    // Click the Male radio button
    await radiobutton.click();

    // Locate the actual radio input
    const radioInput = radiobutton.locator("input[type='radio']");

    // Method 1: Verify that the radio button is selected
    await expect(radioInput).toBeChecked({ timeout: 5000 });

    // Method 2: Verify selection using isChecked()
    const isSelected = await radioInput.isChecked();

    expect(isSelected).toBeTruthy();

    // Method 3: Verify that the radio button is NOT selected
    // This is a negative test, so it is intentionally commented out.
    // Uncomment it only when you expect the radio button to be unchecked.

    // await expect(radioInput).not.toBeChecked({ timeout: 5000 });

    // Wait for 2 seconds before ending the test
    await page.waitForTimeout(2000);

});
