const { test, expect } = require("@playwright/test");

test("iframe testcase", async ({ page }) => {
  await page.goto("https://commitquality.com/practice-iframe");
  await page
    .frameLocator("[data-testid= 'iframe']")
    .locator(".filter-textbox")
    .fill("Product 2");
  await page.pause();
});
