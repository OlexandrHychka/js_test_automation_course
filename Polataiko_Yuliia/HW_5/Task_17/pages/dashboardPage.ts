import { Page } from '@playwright/test';

class BasePage {
  async getTitle(page: Page): Promise<string> {
    return await page.title();
  }
}

export class DashboardPage extends BasePage {
  async open(page: Page): Promise<void> {
    await page.goto('https://example.com/dashboard');
  }
}