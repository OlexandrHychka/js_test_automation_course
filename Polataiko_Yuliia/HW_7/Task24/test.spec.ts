import { test, expect } from '@playwright/test';

test.beforeEach(async({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
});

test('Checking the logic of adding a task with waiters', async({ page }) => {
    const taskInput = page.getByPlaceholder('What needs to be done?');
    await expect(taskInput).toBeVisible();

    await taskInput.fill('Очікування спрацьовує');
    await taskInput.press('Enter');
    
    await expect(page.getByTestId('todo-item')).toHaveCount(1);
    await expect((page.getByTestId('todo-item')).first()).toBeVisible();
    await expect(page.getByTestId('todo-title')).toHaveText('Очікування спрацьовує');
});