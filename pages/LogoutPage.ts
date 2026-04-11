


 import { Page, Locator } from '@playwright/test';
import { HomePage } from './HomePage';

export class LogoutPage {
    page: Page;

    // Locator
    btnContinue: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locator here ✅
        this.btnContinue = page.locator('.btn.btn-primary');
    }

    // Action methods

    async clickContinue(): Promise<HomePage> {
        await this.btnContinue.click();
        return new HomePage(this.page);
    }

    async isContinueButtonVisible(): Promise<boolean> {
        return await this.btnContinue.isVisible();
    }
}
