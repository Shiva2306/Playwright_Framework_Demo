


//Launch the appln - https://tutorialsninja.com/demo/

//pages required
//1) Homepage
//2) Loginpage
//3) Searchpage

import '../utils/hooks';
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';
import { TestConfig } from '../testconfig';

test('TC_004_SearchProduct_Negative @regression', async ({ page }) => {

   // await page.goto(TestConfig.appUrl);

    //const homePage = new HomePage(page);

    //  Search product from header
    const searchPage = new SearchPage(page);
    await searchPage.searchProduct(TestConfig.invalidsearchProduct);

    // Validation
    const errormessage = await searchPage.getNoResultsMessage();
     expect(errormessage).toContain('There is no product that matches the search criteria.');   
});
