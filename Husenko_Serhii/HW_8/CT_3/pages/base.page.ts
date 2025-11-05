import { Page } from "@playwright/test";

export class BasePage {
    constructor(protected page: Page) {}
    async getTitle(): Promise<string> {
        return await this.page.title();
    }
}
