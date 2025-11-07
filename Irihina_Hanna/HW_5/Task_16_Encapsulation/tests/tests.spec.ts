import { test } from '@playwright/test';
import { LoginPage } from '../code/code.ts';

test('Open login page', async ({ page }) => {
  const loginPage = new LoginPage();
  await loginPage.open(page);
});
