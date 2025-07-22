import { test, expect } from '@playwright/test'




test.beforeEach(async ({ page }) => {
  await page.goto('https://example.com')
})

test('h1 contains text Example Domain and paragraph', async ({ page }) => {
  const h1 = page.getByRole('heading', { level: 1 }) 
  await expect(h1).toHaveText('Example Domain')

  const paragraph = page.getByText(/illustrative/i) 
  await expect(paragraph).toBeVisible()
})

test('verify link and text', async ({ page }) => {
  const link = page.getByRole('link', { name: 'More information...' }) 
  await expect(link).toHaveAttribute('href', 'https://www.iana.org/domains/example')
  await expect(link).toHaveText('More information...')
})

test('verify CSS styles', async ({ page }) => {
  const h1 = page.getByRole('heading', { level: 1 })

  const fontSize = await h1.evaluate(el =>
    window.getComputedStyle(el).fontSize
  )
  expect(fontSize).toBe('32px') // 2em = 32px

  const bodyBackground = await page.evaluate(() =>
    window.getComputedStyle(document.body).backgroundColor
  )
  expect(bodyBackground).toBe('rgb(240, 240, 242)') // color is changed
})

test('verify element visibility and non-existing element', async ({ page }) => {
  const h1 = page.getByRole('heading', { level: 1 })
  const link = page.getByRole('link', { name: 'More information...' })

  await expect(h1).toBeVisible()
  await expect(link).toBeVisible()

  const notExisting = page.locator('#not-existing')
  await expect(notExisting).toHaveCount(0)
})




