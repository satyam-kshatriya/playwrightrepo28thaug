const { test, expect } = require("@playwright/test");
test("amazon test case", async ({ page }) => {
  //my code will be here

  await page.goto("https://www.amazon.in/");
  await page.locator("#twotabsearchtextbox").pressSequentially("mobi");

  const loc1 = page.locator(".s-heavy:visible");
  // const loc2 = loc1.getByRole("row");
  // await loc2.first().waitFor();
  await loc1.first().waitFor();
  const count1 = await loc1.count();
  // const count2 = await loc2.count();
  console.log(count1);
  // console.log(count2);

  const text1 = await loc1.allInnerTexts();
  // console.log(text1);
  // await page.pause();

  for (let ch of text1) {
    console.log("mobi" + ch);
  }

  await loc1.nth(2).click();

  const loc3 = page
    .locator(".a-declarative")
    .getByRole("link", {
      name: "Apply the filter Get It Today to narrow results",
    })
    // .locator("input[type='checkbox']");
    .locator("label");
  await loc3.first().waitFor();
  const count3 = await loc3.count();
  console.log(count3);
  await loc3.click();
  // await page.pause();
});
