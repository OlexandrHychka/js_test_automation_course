import { test, expect } from '@playwright/test';

test('waiters', async ({page}) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  const todoField = page.getByRole('textbox', { name: 'What needs to be done?' })
  await todoField.waitFor();
  expect(todoField).toBeVisible();

  await todoField.fill('Очікування спрацьовує');
  await todoField.press('Enter');
  const todolist = page.getByRole('listitem').locator('div'); 
  await expect(todolist).toHaveText('Очікування спрацьовує');

});
