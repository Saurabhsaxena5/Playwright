const { test, expect } = require('@playwright/test');

test('Homepage', async ({ page }) => {
  await page.goto('https://demoblaze.com/');

  const pageTitle = await page.title();
  console.log('Page Title:' + pageTitle);

  await expect(page).toHaveTitle('STORE');

  const pageUrl = await page.url();
  console.log('Page URL:' + pageUrl);

  await expect(page).toHaveURL('https://demoblaze.com/');

  await page.close();
});
