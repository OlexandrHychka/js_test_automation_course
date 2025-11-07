import { login } from '../helpers/authHelper';
import { test, expect } from '@playwright/test';

test('Checking access to the dashboard', async ({ page }) => {
    await login(page, 'qa@example.com', '123456');
    await expect(page.locator('h1')).toHaveText('Dashboard');
});