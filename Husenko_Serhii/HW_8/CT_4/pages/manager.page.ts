import { Page } from "@playwright/test";
import { DashboardPage } from "./dashboard.page";
import { LoginPage } from "./login.page";

export class PageManager {
    constructor(private page: Page) {}
    get loginPage(): LoginPage {
        return new LoginPage(this.page);
    }
    get dashboardPage(): DashboardPage {
        return new DashboardPage(this.page);
    }
}
