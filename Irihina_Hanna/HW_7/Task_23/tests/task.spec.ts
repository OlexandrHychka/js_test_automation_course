import { test, expect } from '@playwright/test';

test('check adding logic', async ({page}) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Make a bed');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');

  const todolist = page.getByRole('listitem').locator('div'); 
  await expect(todolist).toHaveText('Make a bed'); //задача зʼявилась у списку
  await expect (todolist.filter({hasText: 'Make a bed'})).toBeVisible() //задача видима
  await expect(todolist).toHaveCount(1);  //лише одна задача


});
