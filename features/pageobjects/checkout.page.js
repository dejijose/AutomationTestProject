import { $ } from '@wdio/globals'
import Page from '../pageobjects/page.js'


class checkoutPage extends Page {
    
    get txtLoginName () {
        return $('#loginFrm_loginname');
    }

    get txtPassword () {
        return $('#loginFrm_password');
    }

    get btnLogin () {
        return $('//button[@title="Login"]');
    }

    get lnkMenu () {
        return $(`//a[contains(text(),"${menu}")]`);
    }

    get lnkSubMenu () {
        return $('//a[contains(text(),"{submenu}")]');
    }

    get lblMainText () {
        return $('//span[text()="{submenu}"]');
    }

    get btnAddToCart () {
        return $('//a[text()="{product}"]/ancestor:: div[@class="fixed_wrapper"]/following-sibling ::div/div[@class="pricetag jumbotron"]/a');
    }

    get lblPrice() {
        return $(".price > div");
    }

    get lblPriceProductPage() {
        return $(".productfilneprice");
    }

    get btnAddToCartProductPage() {
        return $("a.cart");
    }

    get lblPriceCartPage() {
        return $('//a[text()="{product}"]/parent :: td/following-sibling::td[@class="total"]');
    }

    async landOnApplication(page) {
        await browser.url(`https://automationteststore.com/index.php?rt=account/${page}`);
     }

    async enterUserCredentials () {
      
        await this.txtLoginName.setValue("Test2.Test2")
        await this.txtPassword.setValue("Test2.Test2")
    }

    async clickOnLogin () {
        await this.btnLogin.click()
    }

    async navigateToMenu (menu) {
        await this.lnkMenu.replaceValue(menu).click();

    }
    async navigateToSubMenu (submenu) {
        await this.lnkSubMenu(submenu).click()

    }

    async verifyProductPage (submenu) {
        await this.lblMainText(submenu).isDisplayed()
    }

    async clickOnAddToCart(product){
        await this.btnAddToCart(product).isDisplayed()
        await this.btnAddToCart(product).click()
        var price = (await this.lblPrice).getText()
        return price
    }

    async verifyPrice(){
        await this.lblPriceProductPage.isDisplayed()
        var priceOnProductPage = await this.lblPriceProductPage.getText()
        return priceOnProductPage
    }

    async clickOnAddToCartFromProductPage(){
        await this.btnAddToCartProductPage.isDisplayed()
        (await this.btnAddToCartProductPage).click
    }

    async verifyPriceOnCartPage(product){
        await this.lblPriceCartPage.isDisplayed()
        var priceOnCartPage = await this.lblPriceCartPage.getText()
        return priceOnCartPage

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

export default new checkoutPage();
