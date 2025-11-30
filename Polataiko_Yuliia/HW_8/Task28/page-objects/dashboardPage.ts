import { Page } from '@playwright/test';
import { BasePage } from './basePage';

export class DashboardPage extends BasePage {
  async open(): Promise<void> {
    await this.page.goto('https://example.com/dashboard');
  }
} 