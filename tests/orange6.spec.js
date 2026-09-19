const { test, expect } = require("@playwright/test");
test("usernames extract @smoke", async ({ page }) => {
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
  //console.log(count1);
  await loc1.click();

  const loc2 = page.locator(".oxd-table-filter-area").locator(".oxd-input");
  await loc2.first().waitFor();
  const count2 = await loc2.count();
  console.log("count2 " + count2);
  await loc2.fill("Admin");
  const loc3 = page
    .locator(".oxd-form-actions")
    .getByRole("button", { name: " Search " });
  const count3 = await loc3.count();
  console.log("count3 " + count3);
  await loc3.click();
  await page.pause();

  const loc4 = page
    .locator(".orangehrm-horizontal-padding")
    .locator(".oxd-text");
  // await expect(loc4).toHaveText("Record Found");
  await expect(loc4).toContainText("Record Found");
});
