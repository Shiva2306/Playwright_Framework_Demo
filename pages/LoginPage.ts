
import { Page, Locator } from '@playwright/test';

export class LoginPage {
    page: Page;

    // Locators
    emailInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators here ✅
        this.emailInput = page.locator('#input-email');
        this.passwordInput = page.locator('#input-password');
        this.loginButton = page.locator('input[type="submit"]');
        this.errorMessage = page.locator("//div[contains(@class,'alert-danger')]");
    }

    // Action methods

    async enterEmail(email: string) {
        await this.emailInput.fill(email);
        await this.page.waitForTimeout(2000);
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
        await this.page.waitForTimeout(2000);
    }

    async clickLogin() {
        await this.loginButton.click();
        await this.page.waitForTimeout(2000);

    }

    async getloginErrorMessage() {
        const errorText = await this.errorMessage.textContent();
        return errorText?.trim();
        await this.page.waitForTimeout(2000);

    }
}
