
const { test, expect } =require("@playwright/test")


test("Handling Dropdown Test", async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");

//await page.locator("#country").selectOption({ label: "India" });\


//await page.locator("#country").selectOption({ value: "uk" });

//await page.locator("#country").selectOption({ index: 3 });

await page.selectOption("#country",'India' );

//Assertion 

await expect(page.locator("#country")).toHaveValue("india");
const option=await page.locator('#country option');

await expect(option).toHaveCount(10);


//Approach 2

const  options=await page.$$('#country option')
console.log("Total options in dropdown are: "+options.length);

let status=false;
for(const option of options){
    console.log(await option.textContent());
    let value=await option.textContent();
    if(value.includes("India")){
        status=true;
        break;
    }   
}
expect(status).toBeTruthy();

await page.waitForTimeout(5000);

});