import { test, expect } from '@playwright/test';

  test.beforeEach (async ({page}) => {
    await page.goto('./todomvc'); 
})
test('App page is opened', async ({ page }) => {
 await expect(page.getByRole('heading', { name: 'todos' })).toBeVisible();
 await expect(page.getByRole('textbox', { name: 'What needs to be done?' })).toBeVisible();
})

test('Add new task and check', async ({page}) => {
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Buy milk');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await expect(page.getByRole('listitem').filter({ hasText: 'Buy milk' }).locator('div').first()).toBeVisible();

})

