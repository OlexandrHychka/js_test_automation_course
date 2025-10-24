import { Page } from '@playwright/test';

export async function login(page: Page, email: string, password: string): Promise<void> {
    await page.goto('file://' + __dirname + '/../pages/login.html');
    await page.fill('#email', email);
    await page.fill('#password', password);
    await page.click('button[type="submit"]');
}