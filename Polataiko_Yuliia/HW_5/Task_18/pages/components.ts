import { Page } from '@playwright/test';

export abstract class Component {
  abstract click(page: Page): Promise<void>;
}

export class Button extends Component {
  constructor(private selector: string) {
    super();
  }
  
  async click(page: Page): Promise<void> {
    console.log(`Clicking button: ${this.selector}`);
    await page.waitForSelector(this.selector);
    await page.click(this.selector);
  }
}

export class Link extends Component {
  constructor(private selector: string) {
    super();
  }

  async click(page: Page): Promise<void> {
    console.log(`Hovering and clicking link: ${this.selector}`);
    await page.waitForSelector(this.selector);
    await page.hover(this.selector);
    await page.click(this.selector);
  }
}

export async function clickAll(components: Component[], page: Page) {
  for (const component of components) {
    await component.click(page);
  }
}