const { test, expect } = require('@playwright/test');

test('Handle Alert Test',async({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enable Dialog window Handler
    page.on('dialog',async(dialog)=>{
        console.log(dialog.message());
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })

    await page.locator("//button[@id='alertBtn']").click();

    await page.waitForTimeout(5000);


})


test('Handle Dialog Test',async({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enable Dialog window Handler
    page.on('dialog',async(dialog)=>{
        console.log(dialog.message());
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();
    })

    await page.locator("//button[normalize-space()='Confirmation Alert']").click();

    await expect(page.locator("//p[normalize-space()='You pressed OK!']"))
    .toHaveText("You pressed OK!");

    await page.waitForTimeout(5000);


})


test('Handle Prompt Test',async({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enable Dialog window Handler
    page.on('dialog', async (dialog) => {
    console.log(dialog.message());

    expect(dialog.type()).toContain('prompt');
    expect(dialog.message()).toContain('Please enter your name:');

    await dialog.accept('John Doe');
});

    await page.locator("//button[@id='promptBtn']").click();

    await expect(page.locator("//p[normalize-space()='Hello John Doe! How are you today?']"))
    .toHaveText("Hello John Doe! How are you today?");

    await page.waitForTimeout(5000);


})

