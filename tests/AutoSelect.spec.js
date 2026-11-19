const { expect } = require('@playwright/test');

test('Auto Select Dropdown Test', async ({ page }) => {
        await page.goto('https://www.redbus.in/');



        await page.locator('#src').fill('Delhi');
        await page.waitForTimeout(5000);



})