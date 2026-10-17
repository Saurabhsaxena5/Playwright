const {test,expect } = require("@playwright/test");


test("Locator Test", async ({ page }) => {

    await page.goto("https://demoblaze.com/");

    await page.locator("//a[@id='signin2']").click();

    await page.locator("//input[@id='sign-username']").fill("Saurabh001");

    await page.locator("//input[@id='sign-password']").fill("Saurabh@123");


    await page.locator("(//button[normalize-space()='Sign up'])[1]").click();

    const isUserVisible = await page.locator("//a[@id='nameofuser']").textContent();
    
   console.log(isUserVisible);
    await page.waitForTimeout(2000);
   await page.close();



})