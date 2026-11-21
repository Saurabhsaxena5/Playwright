const {test, expect } = require('@playwright/test')

test("Multi Select Dropdown Test", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

// These queries are used to select multiple options from the dropdown
    await page.selectOption("#colors", ['Red', 'Blue', 'Green']);

   

// Assertion to verify that the selected options are correct
    const selectoption=await page.locator("#colors option");
    expect(selectoption).toHaveCount(7);


    // Approach 2

   const selectoption2= page.locator("#colors option");
   console.log("Total length: " + await selectoption2.count());


   //Approach 3
   const options=await page.$$('#colors option');
   console.log("Total options in dropdown are: "+options.length);

   //Approach 4
const context = await page.locator('#colors option:checked').allTextContents();

// Remove extra spaces and newline characters
const cleanContext = context.map(text => text.trim());

console.log(cleanContext);

expect(cleanContext.includes("Red")).toBeTruthy();
expect(cleanContext.includes("Blue")).toBeTruthy();
expect(cleanContext.includes("Green")).toBeTruthy();
expect(cleanContext.includes("Black")).toBeFalsy();



})

