import { test, expect } from '@playwright/test';

test('Check access to the secure area', async ({ browser }) => {
    const context = await browser.newContext({
        storageState: 'tests/Safari/auth.json',
    });
    const page = await context.newPage();

    const [response] = await Promise.all([
        page.waitForResponse(resp => resp.url().includes('/secure') && resp.status() === 200),
        page.goto('/secure'),
    ]);

    expect(response.status()).toBe(200);

    await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();

    await context.close();
});