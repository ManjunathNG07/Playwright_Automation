import{test,expect} from '@playwright/test';
let webContext;
test.beforeAll(async({browser})=>{

   const context=await browser.newContext();
   const page=await context.newPage();
   
await page.goto('https://www.demoblaze.com/');
await page.click('#login2');
await page.fill('#loginusername','pavanol');
await page.fill('#loginpassword','test@123');
await page.click("//button[.='Log in']");
await page.waitForLoadState('networkidle');
await context.storageState({path:'state.json'});
webContext=await browser.newContext({storageState:'state.json'})

})
test('test2',async()=>{
   const page =await webContext.newPage()
   await page.goto('https://www.demoblaze.com/');
   await page.pause();


})