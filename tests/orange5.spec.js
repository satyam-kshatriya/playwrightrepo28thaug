const { test, expect } = require("@playwright/test");

const testData = [
  {
    username: "Admin",
    password: "admin123",
    expected: "success",
  },
  {
    username: "Admin1",
    password: "wrong123",
    expected: "Invalid credentials",
  },
  {
    username: "testuser",
    password: "test123",
    expected: "Invalid credentials",
  },
];
for (let ch of testData) {
  test(`login with user ${ch.username}  @smoke`, async ({ page }) => {
    await page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );

    await page.locator("[name='username']").fill(ch.username);
    await page.locator("[name='password']").fill(ch.password);
    await page.locator(".oxd-button").click();
    // await page.pause();
    //assertion

    if (ch.expected === "success") {
      await expect(page).toHaveURL(/dashboard/);
    } else {
      const loc1 = page.locator(".oxd-alert-content-text");
      await expect(loc1).toHaveText("Invalid credentials");
    }
  });
}
