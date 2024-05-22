import { $ } from '@wdio/globals'
import Page from './page.js';


class registerPage extends Page {
    
    get accountLoginTitle () {
        return $('//span[text()=" Account Login"]');
    }

    get registerAccount () {
        return $('#accountFrm_accountregister');
    }

    get btnContinue () {
        return $('//button[@title="Continue"]');
    }

    get titleCreateAccountPage () {
        return $('/span[text()=" Create Account"]');
    }

    get subTitlePersonalDetails () {
        return $('//h4[text()="Your Personal Details"]');
    }

    get subTitleYourAddress () {
        return $('//h4[text()="Your Address"]');
    }

    get subTitleLoginDetails () {
        return $('//h4[text()="Login Details"]');
    }

    get subTitleNewsletter () {
        return $('//h4[text()="Newsletter"]');
    }

    get txtFirstName () {
        return $('#AccountFrm_firstname');
    }

    get txtLastName () {
        return $('#AccountFrm_lastname');
    }

    get txtEmail () {
        return $('#AccountFrm_email');
    }

    get txtAddress1 () {
        return $('#AccountFrm_address_1');
    }

    get txtCity () {
        return $('#AccountFrm_city');
    }

    get drpRegionOrState () {
        return $('#AccountFrm_zone_id');
    }

    get txtZipCode () {
        return $('#AccountFrm_postcode');
    }

    get drpCountry () {
        return $('#AccountFrm_country_id');
    }

    get txtLoginName () {
        return $('#AccountFrm_loginname');
    }

    get txtPassword () {
        return $('#AccountFrm_password');
    }

    get txtPasswordConfirm () {
        return $('#AccountFrm_confirm');
    }

    get rdoNewsletterSubscribeNo () {
        return $('#AccountFrm_newsletter0');
    }

    get chkPrivacyPolicy () {
        return $('#AccountFrm_agree');
    }


    async verifyAccountLoginPageTitle () {
        await this.accountLoginTitle.isDisplayed()
        await this.registerAccount.click()
    }

    async landOnApplication(page) {
        await browser.url(`https://automationteststore.com/index.php?rt=account/${page}`);
     }

    async clickOnContinue () {
        await this.btnContinue.click()
    }

    async verifyCreateAccountPageTitle () {
        await this.titleCreateAccountPage.isDisplayed();
    }

    async verifyPersonalDetailsSection () {
        await this.subTitlePersonalDetails.isDisplayed();
    }

    async verifyYourAddressSection(){
        await this.subTitleYourAddress.isDisplayed()
    }

    async verifyLoginDetailsSection(){
        await this.subTitleLoginDetails.isDisplayed()
    }

    async verifyNewsletter(){
        await this.subTitleNewsletter.isDisplayed()
    }

    async enterFirstName(input){
        await this.txtFirstName.waitForDisplayed()
        await this.txtFirstName.setValue(input)

    }

    async enterLastName(input){
        await this.txtLastName.waitForDisplayed()
        await this.txtLastName.setValue(input)
    }

    async enterLastName(input){
        await this.txtLastName.waitForDisplayed()
        await this.txtLastName.setValue(input)
    }

    async enterEmail(input){
        var email = input + "@test.com"
        await this.txtEmail.waitForDisplayed()
        await this.txtEmail.setValue(email)
    }

    async enterAddress1(input){
        await this.txtAddress1.waitForDisplayed()
        await this.txtAddress1.setValue(input)
    }

    async enterCity(input){
        await this.txtCity.waitForDisplayed()
        await this.txtCity.setValue(input)
    }

    async selectRegionOrState(input){
        await this.drpRegionOrState.waitForDisplayed()
        await this.drpRegionOrState.selectByVisibleText(input)
    }
    
    async enterZipCode(input){
        (await this.txtZipCode).setValue(input)
    }

    async selectCountry(input){
        await this.drpCountry.waitForDisplayed()
        await this.drpCountry.selectByVisibleText(input)
    }

    async enterLogonName(input){
        (await this.txtLoginName).setValue(input)
    }

    async enterPassword(input){
        await this.txtPassword.setValue(input)
    }

    async enterPasswordConfirm(input){
        await this.txtPasswordConfirm.setValue(input)
    }

    async selectNewsletterSubscribe(){
        await this.rdoNewsletterSubscribeNo.waitForDisplayed()
        await this.rdoNewsletterSubscribeNo.click()
    }

    async acceptPrivacyPolicy(){
        await this.chkPrivacyPolicy.waitForDisplayed()
        await this.chkPrivacyPolicy.click()
    }
}

export default new registerPage();
