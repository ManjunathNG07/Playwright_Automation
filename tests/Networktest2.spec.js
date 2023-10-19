import { test, expect, request } from '@playwright/test';


test('security test request interpeting', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill('manjung654@gmail.com');
    await page.locator("#userPassword").fill("Test@123");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();

    await page.locator("//button[contains(.,' ORDERS')]").click();

  await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
  route => route.continue({ url: "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=652919957244490f95cbef54" }))

    await page.locator("//button[.='View']").first().click();
    await page.pause();
    await expect( page.locator("//p[@class='blink_me']")).toHaveText('You are not authorize to view this order');
})