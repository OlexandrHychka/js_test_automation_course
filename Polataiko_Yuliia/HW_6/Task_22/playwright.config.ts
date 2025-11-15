import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 30 * 1000,
    expect: {
        timeout: 5000,
    },
    use: {
        baseURL: 'https://the-internet.herokuapp.com/',
        trace: 'on-first-retry',
    },
    projects: [
    {
        name: 'Chrome',
        use: {
            ...devices['Desktop Chrome'],
        },
    },
    {
        name: 'Safari',
        use: {
            ...devices['Desktop Safari'],
        },
    },
  ],
});