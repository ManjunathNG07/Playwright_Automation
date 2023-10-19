//const {test, expect} = require("@playwright/test");
import{test,expect} from '@playwright/test'
test('login',async({page})=>{
 await page.goto('https://www.facebook.com/');


//passing the values in fildes using css-selector
 // await page.locator('#email').fill('maheshgudadannavar22@gmail.com');
   await page.fill('#email','maheshgudadannavar22@gmail.com');


   // await page.locator('#pass').type('ramaya');
    await page.type('#pass','ramaya');

   // selecting by xpath
   await page.click('button[name="login"]');
   await page.close();



})

