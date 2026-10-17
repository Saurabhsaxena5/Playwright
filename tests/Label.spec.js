const { test, expect } = require("@playwright/test");

test("Labeltest", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  // verify login page labels before login
  await expect(page.getByLabel("Username")).toBeVisible();
  await expect(page.getByLabel("Password")).toBeVisible();

  await page.getByRole("textbox", { name: "Username" }).fill("Admin");
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page).toHaveURL(/\/dashboard\//, { timeout: 15000 });
  await expect(
    page.getByRole("heading", { name: "Dashboard" })
  ).toBeVisible({ timeout: 15000 });

  console.log("Login successful and dashboard is visible");
});
