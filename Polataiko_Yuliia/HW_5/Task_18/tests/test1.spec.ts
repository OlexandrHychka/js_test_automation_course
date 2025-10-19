import { test, chromium } from '@playwright/test';
import { Button, Link, Component, clickAll } from '../pages/components';

test('Click all components', async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    
    await page.goto('file://' + __dirname + '/../pages/index.html');
  
    const components = [
        new Button('button#submit'),
        new Link('a#home')
    ];

    await page.waitForTimeout(5000);
    await clickAll(components, page);
    await browser.close();
});