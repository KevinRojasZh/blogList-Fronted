const { test, expect,beforeEach, describe } = require('@playwright/test')

describe('Blog app', () => {
  beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173')
  })

  test('front page can be opened', async ({ page }) => {
  const locator = await page.getByText('Login')
  await expect(locator).toBeVisible()
  })
  

  test('login form ', async ({ page }) => {

    await page.getByTestId('username').fill('root')
    await page.getByTestId('password').fill('1234')
    await page.getByRole('button', { name: 'Enviar' }).click()
    await expect(page.getByText('root')).toBeVisible()
  })


})
