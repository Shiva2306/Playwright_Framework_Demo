# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_005_LoginDDT.spec.ts >> Login Test with JSON Data: Valid login @datadriven
- Location: tests\TC_005_LoginDDT.spec.ts:29:4

# Error details

```
Error: page.waitForTimeout: Test ended.
```

# Test source

```ts
  1  | 
  2  | import { Page, Locator } from '@playwright/test';
  3  | 
  4  | export class LoginPage {
  5  |     page: Page;
  6  | 
  7  |     // Locators
  8  |     emailInput: Locator;
  9  |     passwordInput: Locator;
  10 |     loginButton: Locator;
  11 |     errorMessage: Locator;
  12 | 
  13 |     constructor(page: Page) {
  14 |         this.page = page;
  15 | 
  16 |         // Initialize locators here ✅
  17 |         this.emailInput = page.locator('#input-email');
  18 |         this.passwordInput = page.locator('#input-password');
  19 |         this.loginButton = page.locator('input[type="submit"]');
  20 |         this.errorMessage = page.locator("//div[contains(@class,'alert-danger')]");
  21 |     }
  22 | 
  23 |     // Action methods
  24 | 
  25 |     async enterEmail(email: string) {
  26 |         await this.emailInput.fill(email);
> 27 |         await this.page.waitForTimeout(2000);
     |                         ^ Error: page.waitForTimeout: Test ended.
  28 |     }
  29 | 
  30 |     async enterPassword(password: string) {
  31 |         await this.passwordInput.fill(password);
  32 |         await this.page.waitForTimeout(2000);
  33 |     }
  34 | 
  35 |     async clickLogin() {
  36 |         await this.loginButton.click();
  37 |         await this.page.waitForTimeout(2000);
  38 | 
  39 |     }
  40 | 
  41 |     async getloginErrorMessage() {
  42 |         const errorText = await this.errorMessage.textContent();
  43 |         return errorText?.trim();
  44 |         await this.page.waitForTimeout(2000);
  45 | 
  46 |     }
  47 | }
  48 | 
```