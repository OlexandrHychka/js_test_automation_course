import { Locator, Page } from "@playwright/test";

export class LoginPage {
    private page: Page;

    private usernameInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.usernameInput = this.page.locator("#username");
        this.passwordInput = this.page.locator("#password");
        this.loginButton = this.page.locator('button[type="submit"]');
    }

    async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
