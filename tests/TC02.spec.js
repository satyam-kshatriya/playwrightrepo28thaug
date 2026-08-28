const { test, expect } = require("@playwright/test");

test("drag and drop", async ({ page }) => {
  console.log("drag and drop");

  const smallBoxLocator = page.getByTestId("small-box");
  const largeBoxLocator = page.getByTestId("large-box");
  await page.goto("https://commitquality.com/practice-drag-and-drop");
  //   await page.pause();
  await smallBoxLocator.dragTo(largeBoxLocator);
  await expect(largeBoxLocator).toContainText("Success");
  //await page.pause();
});

test("manual", async ({ page }) => {
  console.log("Manual drag and drop");
  const smallBoxLocator = page.getByTestId("small-box");
  const largeBoxLocator = page.getByTestId("large-box");
  await page.goto("https://commitquality.com/practice-drag-and-drop");
  //   await page.pause();
  await smallBoxLocator.hover();
  await page.mouse.down();
  await largeBoxLocator.hover();
  await page.mouse.up();
});
