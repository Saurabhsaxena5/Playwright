const { test, expect } = require("@playwright/test");

test("Soft Assertion Test", async ({ page }) => {

await page.goto("https://demoblaze.com/");

// First soft assertion: This will fail
await expect.soft(page).toHaveTitle("STORE123");

console.log("First assertion executed");

// Second soft assertion
await expect.soft(page).toHaveURL("https://demoblaze.com/");

console.log("Second assertion executed");

// Third soft assertion
await expect.soft(
    page.locator("//a[normalize-space()='CATEGORIES']")
).toBeVisible();

console.log("Third assertion executed");

});