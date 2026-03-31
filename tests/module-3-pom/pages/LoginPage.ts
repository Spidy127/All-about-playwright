import { Page, Locator, expect } from '@playwright/test';

import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly errorMessage: Locator;

    constructor(page: Page) {

        super(page);

        this.usernameInput = page.getByPlaceholder('UserName');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.errorMessage = page.locator('#name');

    }
    async goToLoginPage(): Promise<void> {
        await this.navigate('https://demoqa.com/login');

    }

    async fillUsername(username: string): Promise<void> {
        await this.usernameInput.fill(username);
    }
    async fillPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }
    async clickLogin(): Promise<void> {
        await this.loginButton.click();
    }

    async login(username: string, password: string): Promise<void> {
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickLogin();
    }

    async expectLoginPageVisible(): Promise<void> {
        await expect(this.usernameInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.loginButton).toBeVisible();

        
    }

    async expectErrorMessage(message: string): Promise<void> {
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toContainText(message);
    }

}