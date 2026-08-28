const { test, expect } = require("@playwright/test");
test("upload file testing", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await page.locator("[name='username']").fill("Admin");
  await page.locator("[name='password']").fill("admin123");
  await page.locator(".oxd-button").click();
  await page.getByText("Admin").click();
  //   await page.pause();
  //await page.waitForURL(/admin/);
  await page.locator(".oxd-table-card .oxd-table-row").first().waitFor();
  const loc1 = page.locator(".oxd-table-card .oxd-table-row");
  const count1 = await loc1.count();
  const text1 = await loc1.allInnerTexts();

  // console.log(count1);
  // console.log(text1);
  //access cells now
  const loc2 = loc1.locator(".oxd-table-cell").nth(1);
  const count2 = await loc2.count();
  const text2 = await loc2.allInnerTexts();
  // console.log(count2);
  // console.log(text2);
  let arr1 = [];

  for (let i = 0; i < count1; i++) {
    const username1 = await loc1
      .nth(i)
      .locator(".oxd-table-cell")
      .nth(1)
      .innerText();

    arr1.push(username1);

    //
  }

  console.log(arr1);
  await page.pause();
});
