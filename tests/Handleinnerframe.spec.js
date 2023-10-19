import{test,expect}from'@playwright/test';
test('Inner frames',async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');

   const frame3= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
 await frame3.locator('//input[@name="mytext3"]').fill('Welcome');

     const  innerframe=await frame3.childFrames();
    await innerframe[0].locator("//span[.='I am a human']").click();

await page.waitForTimeout(5000);
})