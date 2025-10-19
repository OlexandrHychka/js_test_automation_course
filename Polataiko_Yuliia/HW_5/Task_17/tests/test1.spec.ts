import { test } from '@playwright/test';
import { DashboardPage } from '../pages/dashboardPage';

test('Open the Dashboard page', async ({ page }) => {
  const dashboardPage = new DashboardPage();
  await dashboardPage.open(page);
  await test.expect(page).toHaveURL('https://example.com/dashboard');
  const title = await dashboardPage.getTitle(page);
  console.log('Page title:', title);
});