import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  
  await page.locator('#loginusername').fill('Saurabh001');
  
  await page.locator('#loginpassword').fill('Saurabh@123');
  await page.getByRole('button', { name: 'Log in' }).click();
 

  await page.getByRole('link', { name: 'Welcome Saurabh001' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});