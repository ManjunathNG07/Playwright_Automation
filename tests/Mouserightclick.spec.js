const {test,expect}=require('@playwright/test');
test('Mouse right click action',async({page})=>{

await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');



//right click action
const btn=await page.locator("//span[.='right click me']");
await btn.click({button: 'right'});
await page.waitForTimeout(5000);


})