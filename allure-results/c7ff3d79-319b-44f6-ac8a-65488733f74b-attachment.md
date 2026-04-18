# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_004_SearchNegativeTest.spec.ts >> TC_004_SearchProduct_Negative @regression
- Location: tests\TC_004_SearchNegativeTest.spec.ts:17:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByPlaceholder('Search')

```

# Test source

```ts
  1  | 
  2  | 
  3  |  import { Page, Locator } from '@playwright/test';
  4  | 
  5  | export class SearchPage {
  6  | 
  7  |     page: Page;
  8  | 
  9  |     // Locators
  10 |     searchBox: Locator;
  11 |     searchButton: Locator;
  12 |     products: Locator;
  13 |     noResultsMessage: Locator;
  14 | 
  15 |     constructor(page: Page){
  16 |         this.page = page;
  17 | 
  18 |         // Initialize locators ✅
  19 |         this.searchBox = page.getByPlaceholder('Search');
  20 |         this.searchButton = page.locator('button.btn.btn-default.btn-lg');
  21 |         this.products = page.locator('div.product-thumb h4 a');
  22 |         this.noResultsMessage = page.getByText('There is no product that matches the search criteria.');
  23 |     }
  24 | 
  25 |     // ================= ACTION METHODS =================
  26 | 
  27 |     async enterSearchText(product: string){
> 28 |         await this.searchBox.fill(product);
     |                              ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  29 |                 await this.page.waitForTimeout(2000);
  30 | 
  31 |     }
  32 | 
  33 |     async clickSearch(){
  34 |         await this.searchButton.click();
  35 |                 await this.page.waitForTimeout(2000);
  36 | 
  37 |     }
  38 | 
  39 |     // Reusable method
  40 |     async searchProduct(product: string){
  41 |         await this.enterSearchText(product);
  42 |         await this.clickSearch();
  43 |     }
  44 | 
  45 |     async isProductDisplayed(){
  46 |         return (await this.products.count()) > 0;
  47 |     }
  48 | 
  49 |     async getNoResultsMessage(){
  50 |         return await this.noResultsMessage.textContent();
  51 |                 await this.page.waitForTimeout(2000);
  52 | 
  53 |     }
  54 | }
```