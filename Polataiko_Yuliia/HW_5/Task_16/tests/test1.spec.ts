import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('Open the Login page', async ({ page }) => {
  const loginPage = new LoginPage();
  await loginPage.open(page);
  await test.expect(page).toHaveURL('https://example.com/login');
  await page.waitForTimeout(5000);
});