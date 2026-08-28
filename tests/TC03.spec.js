const { test, expect } = require("@playwright/test");

test("downlaod file", async ({ page }) => {
  console.log("download file test");
  await page.goto("https://commitquality.com/practice-file-download");
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Download File" }).click();
  const obj = await downloadPromise;
  await obj.saveAs("S://download_tc03.txt");
});
