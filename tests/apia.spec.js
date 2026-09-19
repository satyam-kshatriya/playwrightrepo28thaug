const { test, expect } = require("@playwright/test");

test("api testing", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users/1",
  );

  const jsonbody = await response.json();
  console.log(jsonbody);

  const statuscode = await response.status();
  console.log(statuscode);

  const headers = await response.headers();
  console.log(headers);
});
