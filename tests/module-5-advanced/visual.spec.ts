import { test, expect } from '@playwright/test';

test.describe('take screen shot ', () => {



    test('take screen shots', async ({ page }) => {

        await page.goto('https://playwright.dev');

        //const random = Math.random().toString();
        await page.screenshot({
            path: 'test-results/sd.png',
            fullPage: true
        });
        console.log('Done for full page screen shots');

    });

    test('take screen shot of single element', async ({ page }) => {
        await page.goto('https://playwright.dev');

        const heroSection = page.locator('.hero');
        await heroSection.screenshot({
            path: 'test-results/heroSections.png'
        });
        console.log('single element screenshot');
    });

    test('visual comparison - home should be match', async ({ page }) => {
        test.skip(!!process.env.Ci, 'Screenshots differ between OS');

        await page.goto('https://playwright.dev');

        await expect(page).toHaveScreenshot('homepage.png', {
            fullPage: true,
            maxDiffPixelRatio: 0.05
        });

    });

    test('check viewport size', async ({ page }) => {
        await page.goto('https://playwright.dev');

        const viewportSize = page.viewportSize();
        console.log('viewportSize', viewportSize);

        expect(viewportSize?.width).toBe(1280);
        expect(viewportSize?.height).toBe(720);

    });
    test('mobile screen shots', async ({ page }) => {

        await page.setViewportSize({ width: 375, height: 820 });
        await page.goto('https://playwright.dev');

        const size = page.viewportSize();
        expect(size?.width).toBe(375);

        await page.screenshot({
            path: 'test-result/mobile/phone-view.png'
        });
        console.log('mobile screenshot saved');
    });

});
