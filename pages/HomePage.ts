
//Page Object class components
//1) Constructor
//2) Locator
//3) Action methods


import { Page, Locator } from '@playwright/test';

export class HomePage {
    page: Page;

    // Locators
    myAccount: Locator;
    register: Locator;
    login: Locator;

    constructor(page: Page) {
        this.page = page;

        this.myAccount = page.locator('span:has-text("My Account")');
        this.register = page.locator('a:has-text("Register")');
        this.login = page.locator('a:has-text("Login")');
    }

    //Action methods
    async clickOnMyAccount() {
        await this.myAccount.click();
    }

    async clickOnRegister() {
        await this.register.click();
    }

    async clickOnLogin() {
        await this.login.click();
    }
}


