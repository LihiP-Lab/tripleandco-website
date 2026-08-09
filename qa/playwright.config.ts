import { defineConfig, devices } from "@playwright/test";

// BASE_URL decides what gets tested:
//   push / pull_request  -> http://127.0.0.1:3000 (the build produced by this commit)
//   Monday schedule      -> https://www.tripleandco.com (what the public actually sees)
const baseURL = process.env.BASE_URL || "http://127.0.0.1:3000";

// Escape hatch for sandboxes that ship their own Chromium and cannot run
// `playwright install`. CI leaves this unset and uses the managed browser.
const chromiumPath = process.env.PW_CHROMIUM_PATH;

export default defineConfig({
  testDir: "./tests",
  outputDir: "./results/playwright",
  timeout: 45_000,
  expect: { timeout: 10_000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 4 : undefined,
  reporter: [
    ["list"],
    ["html", { outputFolder: "./results/html-report", open: "never" }],
    ["json", { outputFile: "./results/playwright.json" }],
  ],
  use: {
    baseURL,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    // Identify ourselves so these hits are filterable out of analytics.
    userAgent:
      "Mozilla/5.0 (compatible; TripleQABot/1.0; +https://www.tripleandco.com)",
  },
  projects: [
    {
      name: "desktop",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1440, height: 900 },
        launchOptions: chromiumPath ? { executablePath: chromiumPath } : {},
      },
    },
    {
      name: "mobile",
      use: {
        ...devices["Pixel 7"],
        launchOptions: chromiumPath ? { executablePath: chromiumPath } : {},
      },
    },
    // Dark-mode a11y leg. colorScheme: "dark" flips prefers-color-scheme,
    // which ThemeProvider reads to set data-theme="dark" -- the same path a
    // real dark-mode visitor takes. Scoped to the a11y spec so the route
    // sweep does not run a third time.
    {
      name: "dark",
      testMatch: /a11y/,
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1440, height: 900 },
        colorScheme: "dark",
        launchOptions: chromiumPath ? { executablePath: chromiumPath } : {},
      },
    },
  ],
});
