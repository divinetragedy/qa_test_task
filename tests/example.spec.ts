import { test, expect } from '@playwright/test';

// Константы
const URL = 'https://playwright.dev/';
const EXPECTED_TITLE = 'Fast and reliable end-to-end testing for modern web apps | Playwright';

test('Проверка заголовка Playwright.dev', async ({ page }) => {
  await page.goto(URL);
  await expect(page).toHaveTitle(EXPECTED_TITLE);
});
