const { test, expect } = require("@playwright/test");
test("Invalid Login @smoke", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await page.locator("[name='username']").fill("Admin");
  await page.locator("[name='password']").fill("admin12a3");
  await page.locator(".oxd-button").click();
  const errmsg = await page.locator(".oxd-alert-content-text").innerText();
  console.log(errmsg);
  expect(errmsg).toBe("Invalid credentials");
});
