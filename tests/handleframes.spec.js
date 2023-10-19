import{test,expect}from'@playwright/test';
test('frames',async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');


  const allframes = await page.frames();
  console.log(`number of frames:${allframes.length}`);



  //apporach 1 :---name or url
  //const varible=await page.frame('name');//if name is available 
 const frame1= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});

 await frame1.fill('//input[@name="mytext1"]','Manju');
await page.waitForTimeout(5000);

//approach 2:--by using frame locators
await page.frameLocator('//frame[@src="frame_1.html"]').locator('//input[@name="mytext1"]').fill('Herooo');
await page.waitForTimeout(5000);
})