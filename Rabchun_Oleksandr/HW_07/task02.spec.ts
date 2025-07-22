import { test, expect } from '@playwright/test';



test.beforeEach(async({page}) => {
  await page.goto('')

})

test('add a new todo "Buy milk" and verify it appears in the list', async ({ page }) => {

  const input = page.getByRole('textbox', { name: /what needs to be done/i })
  await input.fill('Buy milk')
  await input.press('Enter')

  const todoItem = page.locator('li:has-text("Buy milk")')
  await expect(todoItem).toBeVisible()
})