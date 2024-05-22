import { defineStep, Given, Then, When } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import registerPage from '../pageobjects/register.page.js';

let randomNum= Math.floor(Math.random() * 10000);
var inputString = "Test" + randomNum
var regionOrState = "Bristol"
var country = "Australia"
var zipCode = "123422"

Given(/^I am on the (\w+) automationteststore page$/, async (page) => {
    await registerPage.landOnApplication(page)        
});

When(/^I am selecting checkout option as Register account$/, async () => {
    await registerPage.verifyAccountLoginPageTitle()
    await registerPage.clickOnContinue()
});

When(/^I am landing on Registration page$/, async () => {
    await registerPage.verifyCreateAccountPageTitle()
});

Then(/^I should see the Details section$/, async () => {
    await registerPage.verifyPersonalDetailsSection()
    await registerPage.verifyYourAddressSection()
    await registerPage.verifyLoginDetailsSection()
    await registerPage.verifyNewsletter()
});

Then(/^I enter valid data for input fields$/, async () => {
    //await inputString = this.inputStringC
    await registerPage.enterFirstName(inputString)
    await registerPage.enterLastName(inputString)
    await registerPage.enterEmail(inputString)
    await registerPage.enterAddress1(inputString)
    await registerPage.enterCity(inputString)
    await registerPage.selectRegionOrState(regionOrState)
    await registerPage.enterZipCode(zipCode)
    await registerPage.selectCountry(country)
    await registerPage.enterLogonName(inputString)
    await registerPage.enterPassword(inputString)
    await registerPage.enterPasswordConfirm(inputString)
    
});

When(/^I select NewsLetter Subscrible as No$/, async () => {
    await registerPage.selectNewsletterSubscribe()
});

When(/^I agreed to Privacy Policy$/, async () => {
    await registerPage.acceptPrivacyPolicy()
});

When(/^I clicked on continue$/, async () => {
    await registerPage.clickOnContinue()
});

Then(/^My Account should get created successfully$/, async () => {
    await registerPage.clickOnContinue()
});



