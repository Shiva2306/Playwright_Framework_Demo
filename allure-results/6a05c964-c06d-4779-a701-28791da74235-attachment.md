# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_005_LoginDDT.spec.ts >> Login Test with JSON Data: Invalid login @datadriven
- Location: tests\TC_005_LoginDDT.spec.ts:29:4

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "Warning: No match"
Received string:    "Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour."
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - button "$ Currency " [ref=e7] [cursor=pointer]:
        - strong [ref=e8]: $
        - text: Currency
        - generic [ref=e9]: 
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "" [ref=e13] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/contact
            - generic [ref=e14]: 
          - text: "123456789"
        - listitem [ref=e15]:
          - link " My Account" [ref=e16] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
            - generic [ref=e17]: 
            - text: My Account
        - listitem [ref=e19]:
          - link " Wish List (0)" [ref=e20] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
            - generic [ref=e21]: 
            - text: Wish List (0)
        - listitem [ref=e22]:
          - link " Shopping Cart" [ref=e23] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart
            - generic [ref=e24]: 
            - text: Shopping Cart
        - listitem [ref=e25]:
          - link " Checkout" [ref=e26] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=checkout/checkout
            - generic [ref=e27]: 
            - text: Checkout
  - banner [ref=e28]:
    - generic [ref=e30]:
      - link "naveenopencart" [ref=e33] [cursor=pointer]:
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=common/home
        - img "naveenopencart" [ref=e34]
      - generic [ref=e36]:
        - textbox "Search" [ref=e37]
        - button "" [ref=e39] [cursor=pointer]:
          - generic [ref=e40]: 
      - button " 0 item(s) - $0.00" [ref=e43] [cursor=pointer]:
        - generic [ref=e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=e46]:
    - generic: 
    - list [ref=e48]:
      - listitem [ref=e49]:
        - link "Desktops" [ref=e50] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=20
      - listitem [ref=e51]:
        - link "Laptops & Notebooks" [ref=e52] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=18
      - listitem [ref=e53]:
        - link "Components" [ref=e54] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=25
      - listitem [ref=e55]:
        - link "Tablets" [ref=e56] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=57
      - listitem [ref=e57]:
        - link "Software" [ref=e58] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=17
      - listitem [ref=e59]:
        - link "Phones & PDAs" [ref=e60] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=24
      - listitem [ref=e61]:
        - link "Cameras" [ref=e62] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=33
      - listitem [ref=e63]:
        - link "MP3 Players" [ref=e64] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=34
  - generic [ref=e65]:
    - list [ref=e66]:
      - listitem [ref=e67]:
        - link "" [ref=e68] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=common/home
          - generic [ref=e69]: 
      - listitem [ref=e70]:
        - link "Account" [ref=e71] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
      - listitem [ref=e72]:
        - link "Login" [ref=e73] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/login
    - generic [ref=e74]:
      - generic [ref=e75]: 
      - text: "Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour."
    - generic [ref=e76]:
      - generic [ref=e78]:
        - generic [ref=e80]:
          - heading "New Customer" [level=2] [ref=e81]
          - paragraph [ref=e82]:
            - strong [ref=e83]: Register Account
          - paragraph [ref=e84]: By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
          - link "Continue" [ref=e85] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/register
        - generic [ref=e87]:
          - heading "Returning Customer" [level=2] [ref=e88]
          - paragraph [ref=e89]:
            - strong [ref=e90]: I am a returning customer
          - generic [ref=e91]:
            - generic [ref=e92]:
              - generic [ref=e93]: E-Mail Address
              - textbox "E-Mail Address" [ref=e94]: abcxyz@xyz.com
            - generic [ref=e95]:
              - generic [ref=e96]: Password
              - textbox "Password" [ref=e97]: abcxyx
              - link "Forgotten Password" [ref=e98] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/forgotten
            - button "Login" [ref=e99] [cursor=pointer]
      - complementary [ref=e100]:
        - generic [ref=e101]:
          - link "Login" [ref=e102] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/login
          - link "Register" [ref=e103] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/register
          - link "Forgotten Password" [ref=e104] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/forgotten
          - link "My Account" [ref=e105] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
          - link "Address Book" [ref=e106] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/address
          - link "Wish List" [ref=e107] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
          - link "Order History" [ref=e108] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/order
          - link "Downloads" [ref=e109] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/download
          - link "Recurring payments" [ref=e110] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/recurring
          - link "Reward Points" [ref=e111] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/reward
          - link "Returns" [ref=e112] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/return
          - link "Transactions" [ref=e113] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/transaction
          - link "Newsletter" [ref=e114] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/newsletter
  - contentinfo [ref=e115]:
    - generic [ref=e116]:
      - generic [ref=e117]:
        - generic [ref=e118]:
          - heading "Information" [level=5] [ref=e119]
          - list [ref=e120]:
            - listitem [ref=e121]:
              - link "About Us" [ref=e122] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=4
            - listitem [ref=e123]:
              - link "Delivery Information" [ref=e124] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=6
            - listitem [ref=e125]:
              - link "Privacy Policy" [ref=e126] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=3
            - listitem [ref=e127]:
              - link "Terms & Conditions" [ref=e128] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=5
        - generic [ref=e129]:
          - heading "Customer Service" [level=5] [ref=e130]
          - list [ref=e131]:
            - listitem [ref=e132]:
              - link "Contact Us" [ref=e133] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/contact
            - listitem [ref=e134]:
              - link "Returns" [ref=e135] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/return/add
            - listitem [ref=e136]:
              - link "Site Map" [ref=e137] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/sitemap
        - generic [ref=e138]:
          - heading "Extras" [level=5] [ref=e139]
          - list [ref=e140]:
            - listitem [ref=e141]:
              - link "Brands" [ref=e142] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/manufacturer
            - listitem [ref=e143]:
              - link "Gift Certificates" [ref=e144] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/voucher
            - listitem [ref=e145]:
              - link "Affiliate" [ref=e146] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=affiliate/login
            - listitem [ref=e147]:
              - link "Specials" [ref=e148] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/special
        - generic [ref=e149]:
          - heading "My Account" [level=5] [ref=e150]
          - list [ref=e151]:
            - listitem [ref=e152]:
              - link "My Account" [ref=e153] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
            - listitem [ref=e154]:
              - link "Order History" [ref=e155] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/order
            - listitem [ref=e156]:
              - link "Wish List" [ref=e157] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
            - listitem [ref=e158]:
              - link "Newsletter" [ref=e159] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/newsletter
      - separator [ref=e160]
      - paragraph [ref=e161]:
        - text: Powered By
        - link "OpenCart" [ref=e162] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: naveenopencart © 2026
```

# Test source

```ts
  1  | 
  2  | 
  3  | 
  4  | //Launch the appln - https://tutorialsninja.com/demo/
  5  | 
  6  | //pages required
  7  | //1) Homepage
  8  | //2) Loginpage(2 valid data & 3 invalid data)
  9  | //3) Logoutpage
  10 | 
  11 | 
  12 | import { test, expect } from '@playwright/test';
  13 | import { LoginPage } from '../pages/LoginPage';
  14 | import { MyAccountPage } from '../pages/MyAccountPage';
  15 | import { DataProvider } from '../utils/dataProvider';
  16 | import { TestConfig } from '../testconfig';
  17 | import { HomePage } from '../pages/HomePage';
  18 | //import { config } from 'process';
  19 | 
  20 | 
  21 | //Load JSON test data logindata.json
  22 | 
  23 | const jsonPath="testdata/logindata.json";
  24 | const jsonTestData=DataProvider.getTestDataFromJson(jsonPath);
  25 | 
  26 | 
  27 | for(const data of jsonTestData)
  28 | {
  29 |    test(`Login Test with JSON Data: ${data.testName} @datadriven`, async({page})=>{
  30 | 
  31 |         //const config = new TestConfig(); // create instance
  32 |         //await page.goto(config.appUrl);    // getting appURL from test.config.ts file
  33 |        
  34 |         await page.goto(TestConfig.appUrl);
  35 | 
  36 |         const homePage = new HomePage(page);
  37 |         await homePage.clickOnMyAccount();
  38 |         await homePage.clickOnLogin();
  39 | 
  40 |         const loginPage = new LoginPage(page);
  41 |         //await loginPage.login(data.email, data.password);
  42 |         await loginPage.enterEmail(data.email);
  43 |         await loginPage.enterPassword(data.password);
  44 |         await loginPage.clickLogin(); 
  45 | 
  46 |         if(data.expected.toLowerCase()==='success')
  47 |         {
  48 |           //  const myAccountPage=new MyAccountPage(page);
  49 |         //   await myAccountPage.isMyAccountPageExists();
  50 |             await expect(page.getByRole('heading', { name: 'My Account' }).first()).toBeVisible(); 
  51 |         
  52 |         }
  53 |         else{
  54 |             const errorMessage=await loginPage.getloginErrorMessage();
  55 |             //expect(errorMessage).toBe('Warning: No match for E-Mail Address and/or Password.');
> 56 |             expect(errorMessage).toContain('Warning: No match');
     |                                  ^ Error: expect(received).toContain(expected) // indexOf
  57 |         }
  58 |     })
  59 | 
  60 | }
  61 | 
  62 | //This code reads login data from a JSON file and stores it in jsonTestData.
  63 | //  Then, it loops through each data set and runs the same login test multiple times with different inputs (data-driven testing).
  64 | //  For each entry, it opens the site, performs login using the given email and password, and checks the result. 
  65 | // If login is expected to succeed, it verifies the “My Account” page is visible; otherwise, it checks for an error message.
  66 | 
  67 | 
  68 | 
```