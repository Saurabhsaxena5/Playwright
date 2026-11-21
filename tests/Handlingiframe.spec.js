const { test, expect } = require("@playwright/test");


test("Handling Iframe Test", async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");

    const allframes=await page.frames();
    console.log("Total frames in page are: "+allframes.length);


    //Approach 1

  const iframe = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1"});

  iframe.locator("//input[@name='mytext1']").fill("Saurabh");
    
    await page.waitForTimeout(5000);


})