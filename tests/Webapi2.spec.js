import {test,expect,request} from '@playwright/test';
import { APIUtils } from './Utils/APIutils';

const loginPayLoad={
    userEmail: "manjung654@gmail.com",
    userPassword: "Test@123"
}
const OrderPayLoad={
    orders: [
        {
            country: "India",
            productOrderedId: "6262e9d9e26b7e1a10e89c04"
        }
    ]
}
let responce;

test.beforeAll(async()=>{
const apiContext=await request.newContext();
const apiUtils=new APIUtils(apiContext,loginPayLoad);
responce= await apiUtils.createOrder(OrderPayLoad);
})

test('order',async({page})=>{
   
page.addInitScript(value =>{
    window.localStorage.setItem('token',value);
},responce.token)

await page.goto('https://rahulshettyacademy.com/client/');
await page.click("//button[contains(.,' ORDERS')]");
await page.locator('tbody').waitFor();

const products=await page.locator('tbody tr');


for(let i=0;i<await products.count();++i){
   const product= await products.nth(i).locator('th').textContent();
   if(responce.orderId.includes(product)){
    await products.nth(i).locator('button').first().click();
    break;
   }
}


const orderDitails=await page.locator('//div[@class="col-text -main"]').textContent();
await page.pause();
expect( await responce.orderId.includes(orderDitails)).toBeTruthy();




})