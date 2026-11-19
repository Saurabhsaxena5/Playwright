const{test,expect}=require('@playwright/test');


test('Handle Dropdown Test',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


      await page.locator("//input[@placeholder='Username']").fill("Admin");

    // Enter password
    await page.locator("//input[@placeholder='Password']").fill("admin123");


    await page.locator("//button[@type='submit']").click();

    
    
    await page.waitForTimeout(6000);




    // Click Login
    await page.locator("//span[normalize-space()='PIM']").click();


    //click dropdown

    await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click();

     await page.waitForTimeout(5000);


     const allValuePrint = page.locator("//div[@role='option']//span");

    const values = await allValuePrint.allTextContents();

    for (let value of values) {
    console.log(value);

    if(value.includes("HR Manager")){
        await page.locator("//div[@role='option']//span[contains(text(),'HR Manager')]").click();
        break;
    }
     


   
}

await page.waitForTimeout(5000);


})