import { defineStep, Given, Then, When } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import checkoutPage from '../pageobjects/checkout.page.js';

var today = new Date();
let randomNum= Math.floor(Math.random() * 10000);
var inputString = "Test" + randomNum
var regionOrState = "Bristol"
var country = "Australia"
var zipCode = "123422"
var price = ""


Given(/^I am on the (\w+) automationteststore page$/, async (page) => {
  await checkoutPage.landOnApplication(page)        
});

  
When(/^I am entering username and password$/, async () => {
    await checkoutPage.enterUserCredentials()
    
  });
 
When(/^I clicked on Login$/, async () => {
    await checkoutPage.clickOnLogin()
  });

When(/^I navigated to (\w+) and (.+)$/, async (menu , submenu) => {
    await checkoutPage.navigateToMenu(menu)
    await checkoutPage.navigateToSubMenuMenu(submenu)
  });
  
Then(/^I landed in (\w+) page$/, async (submenu) => {
    await checkoutPage.verifyProductPage(submenu)
  });

When(/^I clicked add to cart for (.+)$/, async (product) => {
    //price = await checkoutPage.clickOnAddToCart(product) 
  });
  
Then(/^I validated product details$/, async () => {
    // assert(price == await checkoutPage.clickOnAddToCart(product)) 
  });

When(/^I clicked on checkout$/, async() => {
     await checkoutPage.clickOnAddToCartFromProductPage()
  });

  
Then(/^I should see correct (.+) details on shopping cart$/, async (product) => {
   // assert(price == await checkoutPage.verifyPrice(product)) 
  });

Then(/^i should see correct (\w+) detials on checkout confirmation screen$/, async (product) => {
  // Write code here that turns the phrase above into concrete actions
});




When(/^I added product to cart$/, async () => {
  // Write code here that turns the phrase above into concrete actions
});






