import { Page } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}

    private emailInput = this.page.locator('#email');
    private passwordInput = this.page.locator('#password');
    private loginButton = this.page.locator('button[type="submit"]');

    async login(email: string, password: string): Promise<void> {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}