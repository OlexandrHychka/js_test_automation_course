import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/loginPage';

test('Успішний логін', async ({ page }) => {
  await page.goto('file://' + __dirname + '/../pages/login.html');
  const loginPage = new LoginPage(page);
  await loginPage.login('qa@example.com', '123456');
  await expect(page.locator('h1')).toHaveText('Dashboard');
});