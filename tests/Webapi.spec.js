import { test, expect, request } from '@playwright/test';
const loginPayLoad = {
    userEmail: "manjung654@gmail.com",
    userPassword: "Test@123"
}
const OrderPayLoad = {
    orders: [
        {
            country: "India",
            productOrderedId: "6262e9d9e26b7e1a10e89c04"
        }
    ]
}
let token;
let orderId;

test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const loginresponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", { data: loginPayLoad });
    expect(await loginresponse.ok()).toBeTruthy();
    const loginresponsejson = await loginresponse.json();
    token = loginresponsejson.token;
    console.log(token);

    //---------------------------------
    const orderResponce = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
            data: OrderPayLoad,
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
        })

    const orderResponcejson = await orderResponce.json();
    console.log(orderResponcejson);
    orderId = orderResponcejson.orders[0];


})
test('order', async ({ page }) => {
    page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token)

    await page.goto('https://rahulshettyacademy.com/client/');
    await page.click("//button[contains(.,' ORDERS')]");
    await page.locator('tbody').waitFor();

    const products = await page.locator('tbody tr');


    for (let i = 0; i < await products.count(); ++i) {
        const product = await products.nth(i).locator('th').textContent();
        if (orderId.includes(product)) {
            await products.nth(i).locator('button').first().click();
            break;
        }
    }


    const orderDitails = await page.locator('//div[@class="col-text -main"]').textContent();
    await page.pause();
    expect(await orderId.includes(orderDitails)).toBeTruthy();




})