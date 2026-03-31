import  {test, expect } from '@playwright/test';

test('should open playwright website and check title', async ({page}) => {
    await page.goto('https://playwright.dev');


    const getStartedLink = page.getByRole('link',{name: 'Get started'});

    await expect(getStartedLink).toBeVisible();

    await getStartedLink.click();

    await expect(page).toHaveURL(/.*intro/);

    
});

test('should find element by text', async({page}) =>{

    await page.goto('https://playwright.dev');

    const heading = page.getByRole('heading', {name: 'Playwright'});
    await expect(heading).toBeVisible();

    await expect(heading).toHaveText(/Playwright/);
});