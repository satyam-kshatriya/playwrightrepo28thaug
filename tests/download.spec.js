const { test, expect } = require("@playwright/test");

test("test case for downloading", async ({ page }) => {
  await page.goto("https://commitquality.com/practice");
  await page.getByTestId("practice-file-download").click();

  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Download File" }).click();
  const download = await downloadPromise;
  //   download.
});
