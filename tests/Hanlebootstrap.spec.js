
const { test, expect } = require("@playwright/test");

test("Handle Bootstrap Dropdown Test", async ({ page }) => {

    await page.goto("https://www.jquery-az.com/bootstrap-tips-tutorials/");


    

    await page.waitForTimeout(5000);

});
