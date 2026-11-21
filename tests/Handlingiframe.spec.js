const { test, expect } = require("@playwright/test");


test("Handling Iframe Test", async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");

    const allframes=await page.frames();
    console.log("Total frames in page are: "+allframes.length);


    //Approach 1

  const iframe = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1"});

  await iframe.locator("//input[@name='mytext1']").fill("Saurabh");



    
    await page.waitForTimeout(5000);


})


test("Handling Inner Iframe Test", async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");

    const allframes=await page.frames();
    console.log("Total frames in page are: "+allframes.length);


    //Approach 1

  const iframe = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3"});

  await iframe.locator("//input[@name='mytext3']").fill("Saurabh");

  await page.evaluate(() => {
    window.scrollBy(0,500);
  });

   const allframes1= page.frames();

    let found = false;

    for (const frame of allframes1){

        const element = frame.getByText("I am a human", {
            exact: true
        });

        if (await element.count() > 0) {

            console.log("Element found in: " + frame.url());

            await element.first().click();

            found = true;
            break;
        }
    }

    console.log("Element clicked: " + found);
  await page.waitForTimeout(5000);
});





