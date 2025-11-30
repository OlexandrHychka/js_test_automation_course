import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    
    use: {
        trace: 'on-first-retry',
    },

    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                baseURL: 'https://the-internet.herokuapp.com',
            },
        },
        {
            name: 'webkit',
            use: {
                ...devices['Desktop Safari'],
                baseURL: 'https://the-internet.herokuapp.com',
            },
        },
    ],
});