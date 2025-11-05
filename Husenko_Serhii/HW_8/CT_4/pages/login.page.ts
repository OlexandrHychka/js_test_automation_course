import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
    private usernameInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;

    constructor(page: Page) {
        super(page);

        this.usernameInput = this.page.locator("#username");
        this.passwordInput = this.page.locator("#password");
        this.loginButton = this.page.locator('button[type="submit"]');
    }

    async open(): Promise<void> {
        await this.page.goto("/login");
    }

    async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
