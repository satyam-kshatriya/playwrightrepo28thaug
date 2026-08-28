const { test, expect } = require("@playwright/test");
test("API mocking", async ({ page }) => {
  await page.route("https://jsonplaceholder.typicode.com/posts/1", (route) => {
    route.fulfill({
      status: 500,
    });
  });

  const respromise = page.waitForResponse(
    "https://jsonplaceholder.typicode.com/posts/1",
  );
  await page.goto("file:///S:/playwrightautomation/practice.html");
  const res = await respromise;

  console.log(res.status());
});
