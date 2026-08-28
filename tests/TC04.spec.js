const { test, expect } = require("@playwright/test");
test("upload file testing", async ({ page }) => {
  console.log("upload file");

  await page.goto("https://commitquality.com/practice-file-upload");
  await page.getByTestId("file-input").setInputFiles("S://download_tc03.txt");
  await page.pause();
  page.on("dialog", async (dialog) => {
    console.log(dialog.message());
    dialog.accept();
  });
  await page.getByRole("button", { name: "Submit" }).click();
});
