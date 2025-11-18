import { test, expect } from '@playwright/test';

test('waiters', async ({page}) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  await page.waitForSelector('.new-todo'); // 1 варіант очікування
  
  const todoField = page.getByRole('textbox', { name: 'What needs to be done?' })
  expect(todoField).toBeVisible();  // перевірка на видимість поля

  await todoField.fill('Очікування спрацьовує');
  await todoField.press('Enter');
  const todolist = page.getByRole('listitem').locator('div'); 
  await expect(todolist).toHaveText('Очікування спрацьовує');

});
