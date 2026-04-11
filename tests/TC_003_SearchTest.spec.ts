

//Launch the appln - https://tutorialsninja.com/demo/

//pages required

//1) Searchpage


import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';
import { TestConfig } from '../testconfig';

test('TC_003_SearchProduct_Positive @sanity', async ({ page }) => {

    await page.goto(TestConfig.appUrl);

    //const homePage = new HomePage(page);

    //  Search product from header
    const searchPage = new SearchPage(page);
    await searchPage.searchProduct(TestConfig.validsearchProduct);

    // Validation
    const isProductVisible = await searchPage.isProductDisplayed();
     expect(isProductVisible).toBeTruthy();
});
