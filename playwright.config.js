const { defineConfig, devices } = require("@playwright/test");
require("dotenv").config();

module.exports = defineConfig({
  // Test files location
  testDir: "./tests",

  // Allow tests to run in parallel
  fullyParallel: true,

  // CI mein test.only accidentally commit ho to build fail ho
  forbidOnly: !!process.env.CI,

  // Local = no retry
  // CI = 2 retries
  retries: process.env.CI ? 2 : 0,

  // CI mein 2 parallel workers
  workers: process.env.CI ? 2 : undefined,

  // HTML report
  reporter: "html",

  use: {
    // URL from .env
    baseURL: process.env.BASE_URL,

    // Failure par screenshot
    screenshot: "only-on-failure",

    // Failure par video
    video: "retain-on-failure",

    // First retry par trace
    // trace: "on-first-retry",
    trace: "on",

    // Headless execution
    headless: true,
  },

  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },

    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
      },
    },

    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
      },
    },
  ],
});
