import{test,expect,chromium}from '@playwright/test';
test('handling windows',async()=>{

   const browser= await chromium.launch();
   const context=await browser.newContext();
   const page1=await context.newPage();
   const page2=await context.newPage();

   await page1.goto('https://www.google.com');
   await page2.goto('https://www.facebook.com');
})

test.only('handling windows2',async({browser})=>{

   // const browser= await chromium.launch();
    const context=await browser.newContext();
    const page1=await context.newPage();
    const page2=await context.newPage();
 
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle('OrangeHRM');
//approach --1
/*const pagePromise=context.waitForEvent('page');
await page1.click('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[3]/div[2]/p[2]/a');

const newPage=await pagePromise;
await expect(newPage).toHaveTitle('OrangeHRM HR Software | OrangeHRM');
*/
//approach--2
const link=await page1.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[3]/div[2]/p[2]/a');
    const [newPages]=await Promise.all([
        context.waitForEvent('page'),
        link.click()
])

 })
