const { When, Then, Given } = require('@cucumber/cucumber')
const { chromium } = require("@playwright/test");
const { expect } = require("@playwright/test");
const { POManager } = require("../../PageObjects/POManager");


Given('a login to Ecommerce application with {string} and {string}', { timeout: 100 * 1000 }, async function (username, password) {
    const products = this.page.locator(".card-body");
    const loginPage = this.poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(username, password);
});
When('add {string} to Cart', async function (productName) {
    // Write code here that turns the phrase above into concrete actions
    this.dashboardPage = this.poManager.getDashboardPage();
    await this.dashboardPage.searchProductAddCart(productName);
    await this.dashboardPage.navigateToCart();
});

Then('Verify {string} is displayed in the Cart', async function (productName) {
    // Write code here that turns the phrase above into concrete actions
    const cartPage = this.poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(productName);
    await cartPage.Checkout();
});

When('Enter valid details and Place the order', async function () {
    // Write code here that turns the phrase above into concrete actions
    const ordersReviewPage = this.poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind", "India");
    this.orderId = await ordersReviewPage.SubmitAndGetOrderId();
    console.log(this.orderId);
});
Then('Verify order in present in the OrderHistory', async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.dashboardPage.navigateToOrders();
    const ordersHistoryPage = this.poManager.getOrdersHistoryPage();
    await ordersHistoryPage.searchOrderAndSelect(this.orderId);
    expect(this.orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
});


Given('a login to Ecommerce2 application with {string} and {string}', async function (username, password) {
    // Write code here that turns the phrase above into concrete actions
    await this.page.goto('https://www.demoblaze.com/');
    await this.page.click('#login2');
    await this.page.fill('#loginusername', username);
    await this.page.fill('#loginpassword', password);
    await this.page.click("//button[.='Log in']");
});

Then('Verify Error message is displayed', async function () {
    // Write code here that turns the phrase above into concrete actions
    this.page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('User does not exist.')
    })

});