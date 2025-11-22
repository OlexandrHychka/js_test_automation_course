import { test, expect } from '@playwright/test';

test('Completion logic', async ({page}) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  const todoField = page.getByRole('textbox', { name: 'What needs to be done?' })
  expect(todoField).toBeVisible();
  const tasks = ["UI-тест", "UI-тест 2"]

for (const task of tasks) {
  await todoField.fill(task);
  await todoField.press('Enter');
   }

 await page.locator('ul > li').first().getByRole('checkbox').check()
 await  expect (page.getByRole('listitem').first()).toHaveClass('completed')
  })

