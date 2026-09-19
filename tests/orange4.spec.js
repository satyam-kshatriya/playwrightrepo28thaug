const { test, expect } = require("@playwright/test");
test("delete given user  @smoke", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await page.locator("[name='username']").fill("Admin");
  await page.locator("[name='password']").fill("admin123");
  await page.locator(".oxd-button").click();
  const loc1 = page
    .locator(".oxd-main-menu-item--name")
    .filter({ hasText: "Admin" });
  await loc1.first().waitFor();
  const count1 = await loc1.count();
  //console.log(count1);
  await loc1.click();

  const loc2 = page.locator(".oxd-table-body").locator(".oxd-table-card");
  await loc2.first().waitFor();
  const count2 = await loc2.count();
  // await page.pause();
  console.log("count 2 is " + count2);

  const loc3 = page.locator(".oxd-table-body").locator(".oxd-table-card");
  await loc3.first().waitFor();
  const count3 = await loc3.count();
  // await page.pause();
  console.log("total number of user in table is " + count3);

  for (let i = 0; i < count3; i++) {
    const loc4 = loc3.nth(i).locator(".oxd-table-cell").nth(1);
    const count4 = await loc4.count();
    const text4 = await loc4.innerText();
    console.log("name of user in " + i + "th row is : " + text4);

    if (text4 === "sahafsdhfd") {
      console.log("found admin user: " + text4);
      const loc5 = loc3
        .nth(i)
        .locator(".oxd-table-cell")
        .locator(".oxd-icon-button")
        .locator(".bi-trash")
        .nth(0);
      const count5 = await loc5.count();
      console.log("count5 value is ", +count5);

      await loc5.click();
      const loc6 = page.locator(".orangehrm-text-center-align");
      const text6 = await loc6.innerText();
      console.log(text6);

      const deleteButton = page
        .getByRole("button")
        .filter({ hasText: "delete" });
      const count6 = await deleteButton.count();
      console.log("count6", +count6);
      await deleteButton.click();
      //await page.pause();

      break;
    }

    // console.log("Nume " + count4);
    // console.log("name of user in " + i + "th row is : " + text4);
  }

  //post delete verification of same user.
});
