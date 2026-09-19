const { test, expect } = require("@playwright/test");

test("api testing", async ({ page }) => {
  //code will lying here

  await page.route(
    "https://jsonplaceholder.typicode.com/users/1",
    async (route) => {
      route.fulfill({
        status: 201,
      });
    },
  );
  await page.goto("https://jsonplaceholder.typicode.com/users/1");
  const response = await page.goto(
    "https://jsonplaceholder.typicode.com/users/1",
  );
  console.log(response.status());
});
