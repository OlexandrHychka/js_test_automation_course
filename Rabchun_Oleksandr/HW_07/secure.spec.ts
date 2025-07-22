import { test, expect } from '@playwright/test';

test.use({ storageState: 'auth.json' });

test('Access secure page with saved session', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/secure');
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible(); 

  const [response] = await Promise.all([
    page.waitForResponse(response => response.url().includes('/secure') && response.status() === 200),
    page.reload()
  ]);
  expect(response.ok()).toBeTruthy();
});
