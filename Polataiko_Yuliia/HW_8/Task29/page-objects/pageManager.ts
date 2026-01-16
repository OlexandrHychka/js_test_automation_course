import { Page } from '@playwright/test';

export class PageManager {
    constructor(private page: Page) {}

    get loginPage(): LoginPage {
        return new LoginPage(this.page);
    }

    get dashboardPage(): DashboardPage {
        return new DashboardPage(this.page);
    }
}