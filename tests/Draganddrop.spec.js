const {test,expect}=require('@playwright/test');
test('Drag and drop action',async({page})=>{

await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');

const pot1=await page.locator('#box3');
const pot2=await page.locator('#box103');

//apporach---1
await pot1.hover();
await page.mouse.down();

await pot2.hover();
await page.mouse.up();


//approach---2
const pot3=await page.locator('#box6');
const pot4=await page.locator('#box106');

await pot3.dragTo(pot4);


await page.waitForTimeout(5000);

})