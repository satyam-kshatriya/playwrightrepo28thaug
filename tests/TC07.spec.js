const { test, expect } = require("@playwright/test");

test("static dropdown", async ({ page }) => {
  await page.goto("https://commitquality.com/practice-general-components");
  const dropdownloc = page.getByTestId("dropdown").locator("select");
  await dropdownloc.selectOption("option2");
  await page.pause();
});
