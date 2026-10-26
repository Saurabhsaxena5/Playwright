const { test, expect } = require("@playwright/test");

test("Handling Input Box Test", async ({ page }) => {
    await page.goto("https://demoblaze.com/");
    await page.locator("#signin2").click();

    await expect(page.locator("#sign-username")).toBeVisible();
    await expect(page.locator("#sign-password")).toBeEmpty();
    await expect(page.locator("#sign-username")).toBeEditable();
    await expect(page.locator("#sign-password")).toBeEnabled();

    await page.fill("#sign-username", "testuser");
    await page.waitForTimeout(5000 );
    
});