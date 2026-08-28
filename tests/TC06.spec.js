const { test, expect } = require("@playwright/test");
test("dynamic dropdown", async ({ page }) => {
  await page.goto("https://www.yatra.com/");
  const loc1 = page.locator(".css-hfzt6l").nth(0);
  await loc1.click();
  await loc1.pressSequentially("New");
  await page.pause();
  await page.locator(".css-1ktps4k").filter({ hasText: "New Orlean" }).click();
  await page.pause();
});
