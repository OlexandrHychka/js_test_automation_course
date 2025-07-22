import { defineConfig } from '@playwright/test';



export default defineConfig({

  timeout: 15000,
  reporter: 'html',

  use: {
    baseURL: 'https://demo.playwright.dev/todomvc', // todomvc is not available in baseURL and using full call ""

    screenshot: 'only-on-failure',
    trace: 'retain-on-failure'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Chrome',
      use: { 
        browserName: 'chromium',
        storageState: 'auth.json'
    },
  },
      {
      name: 'Safari',
      use: { 
        browserName: 'webkit',
        storageState: 'auth.json'
    },
  }
  ]

});
