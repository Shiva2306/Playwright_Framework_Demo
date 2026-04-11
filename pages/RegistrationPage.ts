


import { Page, Locator } from '@playwright/test';

export class RegistrationPage {
    page: Page;

    firstName: Locator;
    lastName: Locator;
    email: Locator;
    telephone: Locator;
    password: Locator;
    confirmPassword: Locator;
    subscribeYes: Locator;
    checkbox: Locator;
    continueButton: Locator;
    successMessage: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;

        this.firstName = page.locator('#input-firstname');
        this.lastName = page.locator('#input-lastname');
        this.email = page.locator('#input-email');
        this.telephone = page.locator('#input-telephone');
        this.password = page.locator('#input-password');
        this.confirmPassword = page.locator('#input-confirm');
        this.subscribeYes = page.locator('input[name="newsletter"][value="1"]');
        this.checkbox = page.locator('input[type="checkbox"]');
        this.continueButton = page.locator('input[value="Continue"]');
        this.successMessage = page.locator('h1:has-text("Your Account Has Been Created!")');
    }

    async enterFirstName(fname: string) {
        await this.firstName.fill(fname);
        await this.page.waitForTimeout(1000);
    }

    async enterLastName(lname: string) {
        await this.lastName.fill(lname);
        await this.page.waitForTimeout(1000);
    }

    async enterEmail(email: string) {
        await this.email.fill(email);   
        await this.page.waitForTimeout(1000);
    }

    async enterTelephone(phone: string) {
        await this.telephone.fill(phone);
        await this.page.waitForTimeout(1000);
    }

    async enterPassword(pwd: string) {
        await this.password.fill(pwd);
        await this.page.waitForTimeout(1000);
    }

    async enterConfirmPassword(pwd: string) {
        await this.confirmPassword.fill(pwd);
        await this.page.waitForTimeout(1000);
    }

    async clickOnSubscribe() {
        await this.subscribeYes.click();
       await this.page.waitForTimeout(1000);
    }

    async clickOnCheckbox() {
        await this.checkbox.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnContinue() {
        await this.continueButton.click();
        await this.page.waitForTimeout(1000);
    }

    async getSuccessMessage() {
        return await this.successMessage.textContent();
        await this.page.waitForTimeout(1000);
    }
}

