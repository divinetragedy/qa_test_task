import { test, expect } from '@playwright/test';

// Заголовок, который ожидаем на https://playwright.dev/
const expectedTitle = 'Fast and reliable end-to-end testing for modern web apps | Playwright';

test.describe('Проверка заголовка Playwright.dev', () => {
    test('Проверка title на Chromium', async ({ browser }) => {
        const context = await browser.newContext({ channel: 'chromium' });
        const page = await context.newPage();
        await page.goto('https://playwright.dev/');
        await expect(page).toHaveTitle(expectedTitle);
        await context.close();
    });

    test('Проверка title на Firefox', async ({ browserType }) => {
        const browser = await browserType.launch({ channel: 'firefox' });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://playwright.dev/');
        await expect(page).toHaveTitle(expectedTitle);
        await browser.close();
    });
});

