import{test,expect} from '@playwright/test';
import { request } from 'http';

test('abort testing',async({browser})=>{

   const context=await browser.newContext();
   const page=await context.newPage();
  //  page.route('**/*.{png,jpg,jpeg}',route =>route.abort());

    page.on('request',request=>console.log(request.url()));
    page.on('response',Response=>console.log(Response.url(),Response.status()));

await page.goto('https://www.demoblaze.com/');
await page.click('#login2');
await page.fill('#loginusername','pavanol');
await page.fill('#loginpassword','test@123');
await page.click("//button[.='Log in']");
await page.waitForLoadState('networkidle');
await page.waitForTimeout(6000);


})