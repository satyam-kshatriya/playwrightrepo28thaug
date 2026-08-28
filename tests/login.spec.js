const { test, expect } = require("@playwright/test");

const LoginPage = require("../pages/LoginPage");

test("Login test", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.openLoginPage();

  await loginPage.enterUsername(process.env.USERNAME);

  await loginPage.enterPassword(process.env.PASSWORD);
  // await page.pause();
  await loginPage.clickLogin();

  //await expect(loginPage.secureArea).toBeVisible();
});
