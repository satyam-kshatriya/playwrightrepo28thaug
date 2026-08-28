const { test, expect } = require("@playwright/test");

test("java script alert", async ({ page }) => {
  await page.goto("https://mail.rediff.com/cgi-bin/login.cgi");

  page.on("dialog", async (diaglog) => {
    console.log(diaglog.message());
    diaglog.accept();
  });

  await page.locator(".signin-btn").click();

  //   await page.pause();
});
