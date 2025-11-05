import { Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class DashboardPage extends BasePage {
    async open(): Promise<void> {
        await this.page.goto("/dashboard");
    }
}
