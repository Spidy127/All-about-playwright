import {test , expect } from '@playwright/test';

import { LoginPage } from './pages/LoginPage';

test.describe('login page test (using POM)', () =>{

    let loginPage: LoginPage;

    test.beforeEach(async ({page}) => {

        loginPage = new LoginPage(page);
        await loginPage.goToLoginPage();
    });

    test('should display the login from', async () => {
        await loginPage.expectLoginPageVisible();

    });
    test('should show error for invailid credentails', async () => {
        await loginPage.login('wronguser', 'worngpass123');

        await loginPage.expectErrorMessage('Invalid username or password!');
    });

    test('should fill username and verify', async ({page}) =>{
        await loginPage.fillUsername('TestUser');

        const usernameField = page.getByPlaceholder('UserName');
        await expect(usernameField).toHaveValue('TestUser');
    });
});