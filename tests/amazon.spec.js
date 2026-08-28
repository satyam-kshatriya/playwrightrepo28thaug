const { test, expect } = require("@playwright/test");
test("amazon test case @smoke", async ({ page }) => {
  //my code will be here

  await page.goto("https://www.amazon.in/");
  await page.locator("#twotabsearchtextbox").fill("mobile");
  //   await page.pause();
  await page.locator("#nav-search-submit-button").click();
  await page.locator(".puisg-col-inner").first().waitFor();
  const loc1 = page.locator(".puisg-col-inner").locator("h2");
  const count1 = await loc1.count();
  const text1 = await loc1.allInnerTexts();
  console.log(count1);
  console.log(text1);

  //only iphones
  const loc2 = await page
    .locator(".puisg-col-inner")
    .locator("h2")
    .filter({ hasText: "Apple iPhone" });
  const count2 = await loc2.count();
  const text2 = await loc2.allInnerTexts();
  console.log(count2);
  console.log(text2);

  //add first iphone into cart
  const loc3 = await page
    .locator(".puisg-col-inner")
    .locator("h2")
    .filter({ hasText: "Apple iPhone" })
    .first();
  // .locator("name='submit.addToCart'");
  const count3 = await loc3.count();
  const text3 = await loc3.allInnerTexts();
  console.log(count3);
  console.log(text3);
  //new page will be open so handling here

  const pagePromise = page.waitForEvent("popup");

  await loc3.click();
  const page1 = await pagePromise;
  const loc4 = page1
    .locator("#add-to-cart-button[title='Add to Shopping Cart'][type='submit']")
    .nth(1);

  await loc4.waitFor();
  await loc4.click();

  const loc5 = page1.locator(
    "#attach-cart-info-content .a-button-input[type='submit']",
  );
  await loc5.waitFor();
  await loc5.click();
  console.log("success");
});
