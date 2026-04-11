# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_005_LoginDDT.spec.ts >> Login Test with JSON Data: Valid login @datadriven
- Location: tests\TC_005_LoginDDT.spec.ts:29:4

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'My Account' })
Expected: visible
Error: strict mode violation: getByRole('heading', { name: 'My Account' }) resolved to 2 elements:
    1) <h2>My Account</h2> aka locator('#content').getByRole('heading', { name: 'My Account' })
    2) <h5>My Account</h5> aka getByRole('contentinfo').getByRole('heading', { name: 'My Account' })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'My Account' })

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
    - generic [ref=e72]:
      - generic [ref=e73]:
        - heading "My Account" [level=2] [ref=e74]
        - list [ref=e75]:
          - listitem [ref=e76]:
            - link "Edit your account information" [ref=e77] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/edit
          - listitem [ref=e78]:
            - link "Change your password" [ref=e79] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/password
          - listitem [ref=e80]:
            - link "Modify your address book entries" [ref=e81] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/address
          - listitem [ref=e82]:
            - link "Modify your wish list" [ref=e83] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
        - heading "My Orders" [level=2] [ref=e84]
        - list [ref=e85]:
          - listitem [ref=e86]:
            - link "View your order history" [ref=e87] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/order
          - listitem [ref=e88]:
            - link "Downloads" [ref=e89] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/download
          - listitem [ref=e90]:
            - link "Your Reward Points" [ref=e91] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/reward
          - listitem [ref=e92]:
            - link "View your return requests" [ref=e93] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/return
          - listitem [ref=e94]:
            - link "Your Transactions" [ref=e95] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/transaction
          - listitem [ref=e96]:
            - link "Recurring payments" [ref=e97] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/recurring
        - heading "My Affiliate Account" [level=2] [ref=e98]
        - list [ref=e99]:
          - listitem [ref=e100]:
            - link "Register for an affiliate account" [ref=e101] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/affiliate/add
        - heading "Newsletter" [level=2] [ref=e102]
        - list [ref=e103]:
          - listitem [ref=e104]:
            - link "Subscribe / unsubscribe to newsletter" [ref=e105] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/newsletter
      - complementary [ref=e106]:
        - generic [ref=e107]:
          - link "My Account" [ref=e108] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
          - link "Edit Account" [ref=e109] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/edit
          - link "Password" [ref=e110] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/password
          - link "Address Book" [ref=e111] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/address
          - link "Wish List" [ref=e112] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
          - link "Order History" [ref=e113] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/order
          - link "Downloads" [ref=e114] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/download
          - link "Recurring payments" [ref=e115] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/recurring
          - link "Reward Points" [ref=e116] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/reward
          - link "Returns" [ref=e117] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/return
          - link "Transactions" [ref=e118] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/transaction
          - link "Newsletter" [ref=e119] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/newsletter
          - link "Logout" [ref=e120] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/logout
  - contentinfo [ref=e121]:
    - generic [ref=e122]:
      - generic [ref=e123]:
        - generic [ref=e124]:
          - heading "Information" [level=5] [ref=e125]
          - list [ref=e126]:
            - listitem [ref=e127]:
              - link "About Us" [ref=e128] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=4
            - listitem [ref=e129]:
              - link "Delivery Information" [ref=e130] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=6
            - listitem [ref=e131]:
              - link "Privacy Policy" [ref=e132] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=3
            - listitem [ref=e133]:
              - link "Terms & Conditions" [ref=e134] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=5
        - generic [ref=e135]:
          - heading "Customer Service" [level=5] [ref=e136]
          - list [ref=e137]:
            - listitem [ref=e138]:
              - link "Contact Us" [ref=e139] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/contact
            - listitem [ref=e140]:
              - link "Returns" [ref=e141] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/return/add
            - listitem [ref=e142]:
              - link "Site Map" [ref=e143] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/sitemap
        - generic [ref=e144]:
          - heading "Extras" [level=5] [ref=e145]
          - list [ref=e146]:
            - listitem [ref=e147]:
              - link "Brands" [ref=e148] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/manufacturer
            - listitem [ref=e149]:
              - link "Gift Certificates" [ref=e150] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/voucher
            - listitem [ref=e151]:
              - link "Affiliate" [ref=e152] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=affiliate/login
            - listitem [ref=e153]:
              - link "Specials" [ref=e154] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/special
        - generic [ref=e155]:
          - heading "My Account" [level=5] [ref=e156]
          - list [ref=e157]:
            - listitem [ref=e158]:
              - link "My Account" [ref=e159] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
            - listitem [ref=e160]:
              - link "Order History" [ref=e161] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/order
            - listitem [ref=e162]:
              - link "Wish List" [ref=e163] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
            - listitem [ref=e164]:
              - link "Newsletter" [ref=e165] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/newsletter
      - separator [ref=e166]
      - paragraph [ref=e167]:
        - text: Powered By
        - link "OpenCart" [ref=e168] [cursor=pointer]:
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
> 50 |             await expect(page.getByRole('heading', { name: 'My Account' })).toBeVisible();        }
     |                                                                             ^ Error: expect(locator).toBeVisible() failed
  51 |         else{
  52 |             const errorMessage=await loginPage.getloginErrorMessage();
  53 |             //expect(errorMessage).toBe('Warning: No match for E-Mail Address and/or Password.');
  54 |             expect(errorMessage).toContain('Warning: No match');
  55 |         }
  56 |     })
  57 | 
  58 | }
  59 | 
  60 | //This code reads login data from a JSON file and stores it in jsonTestData.
  61 | //  Then, it loops through each data set and runs the same login test multiple times with different inputs (data-driven testing).
  62 | //  For each entry, it opens the site, performs login using the given email and password, and checks the result. 
  63 | // If login is expected to succeed, it verifies the “My Account” page is visible; otherwise, it checks for an error message.
  64 | 
  65 | 
  66 | 
```