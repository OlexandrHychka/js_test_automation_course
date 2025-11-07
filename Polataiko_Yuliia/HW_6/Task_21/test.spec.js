import { test, expect } from '@playwright/test';

test.beforeEach(async({ page }) => {
    await page.goto('');
});

test('Add Buy milk task and check in the list', async({ page }) => {
    await expect(page.locator('input')).toBeVisible();
    await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Buy milk');
    await page.keyboard.press('Enter');
    await expect(page.getByTestId('todo-item')).toHaveCount(1);
    await expect(page.getByTestId('todo-title')).toHaveText('Buy milk');
});