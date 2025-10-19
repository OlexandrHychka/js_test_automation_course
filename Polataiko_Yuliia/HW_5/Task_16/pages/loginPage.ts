import { Page } from '@playwright/test';

export class LoginPage {
  private url: string = 'https://example.com/login';
  async open(page: Page): Promise<void> {
    await page.goto(this.url);
  }
}