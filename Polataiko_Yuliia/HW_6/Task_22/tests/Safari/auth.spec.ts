import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Login and save session', () => {
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto('/login');
        await page.getByRole('textbox', { name: "Username" }).fill('tomsmith');
        await page.getByRole('textbox', { name: "Password" }).fill('SuperSecretPassword!');
        await page.getByRole('button', { name: "Login" }).click();
        
        const flash = page.locator('#flash');
        await expect(flash).toContainText('You logged into a secure area!');

        const filePath = path.join(process.cwd(), 'tests/Safari/auth.json');
        await context.storageState({ path: filePath });

        await context.close();
    });

    test('session saved', async () => {
        // Цей тест існує, щоб beforeAll запустився
    });
});