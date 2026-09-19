const { test, expect } = require("@playwright/test");
test("total available user records @smoke", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await page.locator("[name='username']").fill("Admin");
  await page.locator("[name='password']").fill("admin123");
  await page.locator(".oxd-button").click();
  const loc1 = page
    .locator(".oxd-main-menu-item--name")
    .filter({ hasText: "Admin" });
  await loc1.first().waitFor();
  const count1 = await loc1.count();
  console.log(count1);
  await loc1.click();

  const loc2 = page.locator(".oxd-table-body").locator(".oxd-table-card");
  await loc2.first().waitFor();
  const count2 = await loc2.count();
  await page.pause();
  console.log(count2);
});
