import { Page } from '@playwright/test';

export class LoginPage {
  private url = 'https://the-internet.herokuapp.com/login';
  //i've changed url because the example.com was not working from time to time

  async open(page: Page): Promise<void> {
    await page.goto(this.url);
  }
}
