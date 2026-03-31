import {test, expect} from '@playwright/test';

test.describe('Hooks and Annotations Demo', () => {

    test.beforeAll(async () => {
        console.log('beforeAll: Runs ONCE before all tests');

    });

    test.afterAll(async () =>{
        console.log('afterAll: Runs ONCE after all tests');
    });

    test.beforeEach(async ({page}) => {
      console.log('beforEach: Runs befoe EACH test');
      await page.goto('https://playwright.dev');
    });

    test.afterEach(async () =>{
        console.log('afterEach: Runs after EACH test');
    });

    test('test 1 -check Get Started link', async ({page}) =>{
        console.log('Running test 1');
        await expect(page).toHaveTitle(/Playwright/);

    });

    test('test 2 - check Get Started link', async ({page}) =>{
        console.log('Running test 2');

        const link = page.getByRole('link', {name: 'Get started'});
        await expect(link).toBeVisible();
    });

    test.skip('skipped test - not ready yet', async ({page}) =>{
        await expect(page).toHaveTitle('This will not run');
    });

    test.fixme('fixme test - known bug', async ({page}) =>{

    });

    test('slow test - take longer', async ({page}) =>{
        test.slow();
        console.log('This test has 3x timeout');
        await expect(page).toHaveTitle(/Playwright/);
    });

    test('smoke test - homepage loads @smoke', async ({page}) =>{
        await page.goto('https://playwright.dev');
        await expect(page).toHaveTitle(/Playwright/);
    });

    test('regression test - navigation works @regression', async ({page}) =>{
        await page.goto('https://playwright.dev');
        await page.getByRole('link', {name: 'Get started'}).click();
        await expect(page).toHaveURL(/.*intro/);
    });

})