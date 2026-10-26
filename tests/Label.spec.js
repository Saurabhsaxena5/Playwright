
const { test, expect } = require("@playwright/test");

test("Labeltest", async ({ page }) => {


    // Open OrangeHRM login page
    await page.goto(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    // Verify login form fields are visible
    const username = page.getByRole("textbox", { name: "Username" });
    const password = page.getByRole("textbox", { name: "Password" });
    const loginButton = page.getByRole("button", { name: "Login" });

    await expect(username).toBeVisible();
    await expect(password).toBeVisible();
    await expect(loginButton).toBeVisible();

    console.log("Login form fields are visible");

    // Enter username and password
    await username.fill("Admin");
    await password.fill("admin123");

    // Click Login
    await loginButton.click();

    // Verify Dashboard heading
    await expect(
        page.getByRole("heading", { name: "Dashboard" })
    ).toBeVisible({ timeout: 15000 });

    console.log("Login successful");

    // Click My Info
    await page.locator(
        "//span[normalize-space()='My Info']"
    ).click();

    console.log("My Info page opened");

});



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


