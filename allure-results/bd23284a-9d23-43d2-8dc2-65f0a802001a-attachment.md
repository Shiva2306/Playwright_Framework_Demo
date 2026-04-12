# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_001_RegistrationTest.spec.ts >> TC_001_RegistrationTest @sanity
- Location: tests\TC_001_RegistrationTest.spec.ts:51:1

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "my Account Has Been Created!"
Received string:    "Your Account Has Been Created!"
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
        - link "Success" [ref=e73] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/success
    - generic [ref=e74]:
      - generic [ref=e75]:
        - heading "Your Account Has Been Created!" [level=1] [ref=e76]
        - paragraph [ref=e77]: Congratulations! Your new account has been successfully created!
        - paragraph [ref=e78]: You can now take advantage of member privileges to enhance your online shopping experience with us.
        - paragraph [ref=e79]: If you have ANY questions about the operation of this online shop, please e-mail the store owner.
        - paragraph [ref=e80]:
          - text: A confirmation has been sent to the provided e-mail address. If you have not received it within the hour, please
          - link "contact us" [ref=e81] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/contact
          - text: .
        - link "Continue" [ref=e83] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
      - complementary [ref=e84]:
        - generic [ref=e85]:
          - link "My Account" [ref=e86] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
          - link "Edit Account" [ref=e87] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/edit
          - link "Password" [ref=e88] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/password
          - link "Address Book" [ref=e89] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/address
          - link "Wish List" [ref=e90] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
          - link "Order History" [ref=e91] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/order
          - link "Downloads" [ref=e92] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/download
          - link "Recurring payments" [ref=e93] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/recurring
          - link "Reward Points" [ref=e94] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/reward
          - link "Returns" [ref=e95] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/return
          - link "Transactions" [ref=e96] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/transaction
          - link "Newsletter" [ref=e97] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/newsletter
          - link "Logout" [ref=e98] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/logout
  - contentinfo [ref=e99]:
    - generic [ref=e100]:
      - generic [ref=e101]:
        - generic [ref=e102]:
          - heading "Information" [level=5] [ref=e103]
          - list [ref=e104]:
            - listitem [ref=e105]:
              - link "About Us" [ref=e106] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=4
            - listitem [ref=e107]:
              - link "Delivery Information" [ref=e108] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=6
            - listitem [ref=e109]:
              - link "Privacy Policy" [ref=e110] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=3
            - listitem [ref=e111]:
              - link "Terms & Conditions" [ref=e112] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=5
        - generic [ref=e113]:
          - heading "Customer Service" [level=5] [ref=e114]
          - list [ref=e115]:
            - listitem [ref=e116]:
              - link "Contact Us" [ref=e117] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/contact
            - listitem [ref=e118]:
              - link "Returns" [ref=e119] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/return/add
            - listitem [ref=e120]:
              - link "Site Map" [ref=e121] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/sitemap
        - generic [ref=e122]:
          - heading "Extras" [level=5] [ref=e123]
          - list [ref=e124]:
            - listitem [ref=e125]:
              - link "Brands" [ref=e126] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/manufacturer
            - listitem [ref=e127]:
              - link "Gift Certificates" [ref=e128] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/voucher
            - listitem [ref=e129]:
              - link "Affiliate" [ref=e130] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=affiliate/login
            - listitem [ref=e131]:
              - link "Specials" [ref=e132] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/special
        - generic [ref=e133]:
          - heading "My Account" [level=5] [ref=e134]
          - list [ref=e135]:
            - listitem [ref=e136]:
              - link "My Account" [ref=e137] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
            - listitem [ref=e138]:
              - link "Order History" [ref=e139] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/order
            - listitem [ref=e140]:
              - link "Wish List" [ref=e141] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
            - listitem [ref=e142]:
              - link "Newsletter" [ref=e143] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/newsletter
      - separator [ref=e144]
      - paragraph [ref=e145]:
        - text: Powered By
        - link "OpenCart" [ref=e146] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: naveenopencart © 2026
```

# Test source

```ts
  1  | 
  2  | 
  3  | //Launch appln - https://tutorialsninja.com/demo/
  4  | 
  5  | //To execute this test case - pages required
  6  | //1) HomePage
  7  | //2) RegPage
  8  | //3) MyAccountPage
  9  | 
  10 | /* 
  11 | 
  12 | import {expect, test} from '@playwright/test';  
  13 | import {HomePage} from '../pages/HomePage'; 
  14 | import { RegistrationPage } from '../pages/RegistrationPage';
  15 | import { TestConfig } from '../testconfig';
  16 | 
  17 | test('TC_001_RegistrationTest @sanity', async ({page})=>{   
  18 | 
  19 |     await page.goto(TestConfig.appUrl);
  20 |     
  21 | 
  22 |     let homePage = new HomePage(page);    
  23 |     await homePage.clickOnMyAccount();
  24 |         await homePage.clickOnRegister();
  25 | 
  26 |         let registrationPage = new RegistrationPage(page);
  27 |           
  28 |         await registrationPage.enterFirstName('vinay');
  29 |         await registrationPage.enterLastName('kumar');
  30 |         await registrationPage.enterEmail('abcyutuyt65e@gmail.com');
  31 |         await registrationPage.enterTelephone('97289e728');
  32 |         await registrationPage.enterPassword('pass');
  33 |         await registrationPage.enterConfirmPassword('pass');
  34 |         await registrationPage.clickOnSubscribe();
  35 |         await registrationPage.clickOnCheckbox();
  36 |         await registrationPage.clickOnContinue();
  37 | 
  38 | const successMsg = await registrationPage.getSuccessMessage();
  39 |      expect(successMsg).toContain('Your Account Has Been Created!');
  40 | });
  41 | 
  42 |  */
  43 | 
  44 | 
  45 | import {expect, test} from '@playwright/test';  
  46 | import {HomePage} from '../pages/HomePage'; 
  47 | import { RegistrationPage } from '../pages/RegistrationPage';
  48 | import { RandomDataUtil } from '../utils/randomdatagenerator';
  49 | import { TestConfig } from '../testconfig';
  50 | 
  51 | test('TC_001_RegistrationTest @sanity', async ({page})=>{   
  52 | 
  53 |     await page.goto(TestConfig.appUrl);
  54 | 
  55 |     let homePage = new HomePage(page);    
  56 |     await homePage.clickOnMyAccount();
  57 |         await homePage.clickOnRegister();
  58 | 
  59 |         let registrationPage = new RegistrationPage(page);
  60 |            let fn=RandomDataUtil.getFirstName();
  61 |            let ln=RandomDataUtil.getlastName(); 
  62 |            let email=RandomDataUtil.getEmail();
  63 |              // let telephone=RandomDataUtil.getPhoneNumber(); 
  64 |                 let phone= RandomDataUtil.getRandomNumeric(10);
  65 | 
  66 |                
  67 |             let pass=RandomDataUtil.getPassword();
  68 |             //let pass=RandomDataUtil.getPassword();
  69 |            //let pass2= RandomDataUtil.getRandomPassword(10)
  70 | 
  71 |         await registrationPage.enterFirstName(fn);
  72 |         await registrationPage.enterLastName(ln);
  73 |         await registrationPage.enterEmail(email);
  74 |         await registrationPage.enterTelephone(phone);
  75 |         await registrationPage.enterPassword(pass);
  76 |         await registrationPage.enterConfirmPassword(pass);
  77 |         await registrationPage.clickOnSubscribe();
  78 |         await registrationPage.clickOnCheckbox();
  79 |         await registrationPage.clickOnContinue();
  80 | 
  81 | const successMsg = await registrationPage.getSuccessMessage();
> 82 |      expect(successMsg).toContain('my Account Has Been Created!');
     |                         ^ Error: expect(received).toContain(expected) // indexOf
  83 | });
  84 | 
```