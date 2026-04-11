



import { Page, Locator } from '@playwright/test';
import { LogoutPage } from './LogoutPage';

export class MyAccountPage {
    page: Page;

    // Locators
    msgHeading: Locator;
    lnkLogout: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators here ✅
        this.msgHeading = page.locator('h2:has-text("My Account")');
        this.lnkLogout = page.locator("text='Logout'").nth(1);
    }

    // Action methods

    async isMyAccountPageExists(): Promise<boolean> {
        return await this.msgHeading.isVisible();
    }

    async clickLogout(): Promise<LogoutPage> {
        await this.lnkLogout.click();
        return new LogoutPage(this.page);
    }

    async getPageTitle(): Promise<string> {
        return await this.page.title();
    }
}
