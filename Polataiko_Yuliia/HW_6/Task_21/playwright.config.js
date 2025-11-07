import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://demo.playwright.dev/todomvc',
    timeout: 15000,
    screenshot: 'only-on-failure',
  },
});