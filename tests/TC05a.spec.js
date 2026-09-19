const { test, expect } = require("@playwright/test");

test("iframe testcase with testclass", async ({ page }) => {
  await page.goto("https://commitquality.com/practice-iframe");

  const loc2 = page
    .frameLocator("[data-testid='iframe']")
    .locator(".filter-textbox");
  const count1 = await loc2.count();
  console.log(count1);
  await loc2.first().waitFor();
  await loc2.fill("Product 2");
  await page.pause();
});
