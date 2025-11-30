import { test, expect } from '@playwright/test';

test.beforeEach(async({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
});

test('Adding two tasks and check the first task', async({ page }) => {
    const taskInput = page.getByPlaceholder('What needs to be done?');
    await expect(taskInput).toBeVisible();

    await taskInput.fill('UI-тест 1');
    await taskInput.press('Enter');

    await taskInput.fill('UI-тест 2');
    await taskInput.press('Enter');
    
    const firstCheckbox = page.locator('.todo-list li').nth(0);

    await firstCheckbox.locator('.toggle').check();
    await expect(firstCheckbox).toHaveClass(/completed/);
});