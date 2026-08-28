const { test, expect } = require("@playwright/test");

test("check box", async ({ page }) => {
  await page.goto("https://commitquality.com/practice-general-components");
  const dropdownloc = page
    .locator(".checkbox-container")
    .getByTestId("checkbox1")
    .check();

  // await page.pause();
});

test("one time click", async ({ page }) => {
  await page.goto("https://commitquality.com/practice-general-components");
  const dropdownloc = page.getByTestId("basic-click");
  await dropdownloc.click();
  expect(page.locator(".button-container").locator("p")).toContainText(
    "Button clicked",
  );
  const inlineMessage = await page
    .locator(".button-container")
    .locator("p")
    .allTextContents();
  console.log();

  // await page.pause();
});

test("double click", async ({ page }) => {
  await page.goto("https://commitquality.com/practice-general-components");
  const dropdownloc = page.getByTestId("double-click");
  await dropdownloc.dblclick();
  expect(page.locator(".button-container").locator("p")).toContainText(
    "Button double clicked",
  );
  const inlineMessage = await page
    .locator(".button-container")
    .locator("p")
    .allTextContents();
  console.log();
});

test("right click", async ({ page }) => {
  await page.goto("https://commitquality.com/practice-general-components");
  const dropdownloc = page.getByTestId("right-click");
  await dropdownloc.click({ button: "right" });
  expect(page.locator(".button-container").locator("p")).toContainText("right");
  const inlineMessage = await page
    .locator(".button-container")
    .locator("p")
    .allTextContents();
  console.log();
});
