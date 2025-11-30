import { test, expect } from '@playwright/test';

test.beforeEach(async({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
});

test('Checking the logic of adding a task', async({ page }) => {
    const taskInput = page.getByPlaceholder('What needs to be done?');
    await taskInput.fill('Перевірка логіки додавання');
    await taskInput.press('Enter');

    await expect(page.getByTestId('todo-title')).toHaveText('Перевірка логіки додавання');
    await expect((page.getByTestId('todo-item')).first()).toBeVisible();
    await expect(page.getByTestId('todo-item')).toHaveCount(1);
});