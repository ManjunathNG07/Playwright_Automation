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
const fakePayLoadOrder={data:[],message:"No Orders"};
let responce ;

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

 await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
 async route =>
{
const responce=await page.request.fetch(route.request());
console.log(responce);
let body=JSON.stringify(fakePayLoadOrder);   
route.fulfill(
    {
        responce,
        body,
    }
   );
}
 );


await page.click("//button[contains(.,' ORDERS')]");
await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
console.log(await page.locator('.mt-4').textContent());

})