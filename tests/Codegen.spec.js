import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').press('ControlOrMeta+V');
  await page.locator('#loginusername').fill('Saurabh001');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').press('CapsLock');
  await page.locator('#loginpassword').press('CapsLock');
  await page.locator('#loginpassword').fill('S');
  await page.locator('#loginpassword').press('CapsLock');
  await page.locator('#loginpassword').fill('Saurabh@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'Log in' }).click({
    clickCount: 4
  });
  await page.getByRole('button', { name: 'Log in' }).click({
    clickCount: 3
  });
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'Log in' }).click({
    clickCount: 3
  });
  await page.getByText('PRODUCT STORE Home (current)').click();
  await page.getByRole('link', { name: 'PRODUCT STORE' }).click();
  await page.getByText('New message × Contact Email: Contact Name: Message: Close Send message Sign up').press('ControlOrMeta+-');
  await page.getByText('New message × Contact Email: Contact Name: Message: Close Send message Sign up').press('ControlOrMeta+-');
  await page.getByRole('link', { name: 'Welcome Saurabh001' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});