const { test, expect } = require("@playwright/test");
test("add new user", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await page.locator("[placeholder='Username']").fill("Admin");
  await page.locator("[placeholder='Password']").fill("admin123");
  await page.locator(".oxd-button").click();
  // await page.pause();
  const loc1 = page.locator(".oxd-main-menu-item--name");
  await loc1.first().waitFor();

  await loc1.first().click();
  // await page.pause();

  const loc2 = page.locator(".orangehrm-header-container").getByRole("button");
  await loc2.first().waitFor();
  const count2 = await loc2.count();
  console.log("count2", +count2);
  await loc2.click();

  const loc3 = page.locator(".oxd-select-text-input");
  await loc3.first().waitFor();
  const count3 = await loc3.count();
  console.log("count3", +count3);

  await loc3.nth(0).click();

  const loc4 = page.getByRole("listbox");
  await loc4.first().waitFor();
  const count4 = await loc4.count();
  console.log("count4", +count4);
  // await page.pause();

  //selecting ESS
  const loc5 = loc4.getByText("ESS", { exact: true });
  const text5 = await loc5.allInnerTexts();
  console.log(text5);
  await loc5.click();

  //
  await page
    .locator("[placeholder='Type for hints...']")
    .pressSequentially("a");
  await page.getByRole("listbox").first().waitFor();
  // await page.getByRole("listbox").first().click();
  const listbox = page.getByRole("listbox").first();
  console.log(await listbox.evaluate((el) => el.innerHTML));

  const loc6 = listbox
    .getByRole("option")
    .filter({ hasNotText: "Searching..." });

  await loc6.first().waitFor();

  const count6 = await loc6.first().count();
  const text6 = await loc6.first().innerText();
  console.log(count6);
  console.log(text6);
  await loc6.first().click();
  // page.pause();

  await page.locator(".oxd-select-text--after").nth(1).click();

  const listbox1 = page.getByRole("listbox").first();
  console.log(await listbox1.evaluate((el) => el.innerHTML));
  const loc8 = listbox1.getByRole("option").filter({ hasNotText: "Select" });
  await loc8.first().waitFor();
  await loc8.first().click();

  // await page.getByRole("listbox");

  await page
    .locator(".oxd-grid-item")
    .filter({ hasText: "Username" })
    .locator(".oxd-input")
    // .nth(1)
    .fill("testuser123saaaaaatyam");
  // await page.pause();

  //set password as Test@12345

  await page
    .locator(".oxd-input-group")
    .filter({ hasText: "Password" })
    .filter({ hasNotText: "Confirm" })
    .locator(".oxd-input")
    .fill("Test@12345");

  await page
    .locator(".oxd-input-group")
    .filter({ hasText: "Confirm Password" })
    .locator(".oxd-input")
    .fill("Test@12345");

  await page.locator("[type='submit']").click();

  await page.getByText("Successfully Saved").first().waitFor();
  const successMessage = page.getByText("Successfully Saved");
  const text10 = await successMessage.innerText();
  console.log("count:", await successMessage.count());
  console.log(text10);
});
