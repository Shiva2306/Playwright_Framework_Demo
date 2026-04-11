

 import { Page, Locator } from '@playwright/test';

export class SearchPage {

    page: Page;

    // Locators
    searchBox: Locator;
    searchButton: Locator;
    products: Locator;
    noResultsMessage: Locator;

    constructor(page: Page){
        this.page = page;

        // Initialize locators ✅
        this.searchBox = page.getByPlaceholder('Search');
        this.searchButton = page.locator('button.btn.btn-default.btn-lg');
        this.products = page.locator('div.product-thumb h4 a');
        this.noResultsMessage = page.getByText('There is no product that matches the search criteria.');
    }

    // ================= ACTION METHODS =================

    async enterSearchText(product: string){
        await this.searchBox.fill(product);
                await this.page.waitForTimeout(2000);

    }

    async clickSearch(){
        await this.searchButton.click();
                await this.page.waitForTimeout(2000);

    }

    // Reusable method
    async searchProduct(product: string){
        await this.enterSearchText(product);
        await this.clickSearch();
    }

    async isProductDisplayed(){
        return (await this.products.count()) > 0;
    }

    async getNoResultsMessage(){
        return await this.noResultsMessage.textContent();
                await this.page.waitForTimeout(2000);

    }
}