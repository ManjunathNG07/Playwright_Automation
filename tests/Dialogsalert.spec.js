import {test,expect}from'@playwright/test';
test.skip('alert with ok',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');


//enbaling the dailogs //dialog window handler

page.on('dialog', async dialog=>{

    expect(dialog.type()).toContain('alert');
    expect(dialog.message()).toContain('I am an alert box!');
    await dialog.accept();
})
await page.click("//button[.='Alert']");

await page.waitForTimeout(5000);
})

test('confiramtion alert with ok and cancel',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    
    //enbaling the dailogs //dialog window handler
    
    page.on('dialog', async dialog=>{
    
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept(); //close by ok button
        //await dialog.dismiss();//close by cancel button
    })
    await page.click("//button[.='Confirm Box']");

    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!');
    
    await page.waitForTimeout(5000);
    })


    test('prompt',async({page})=>{

        await page.goto('https://testautomationpractice.blogspot.com/');
        
        
        //enbaling the dailogs //dialog window handler
        
        page.on('dialog', async dialog=>{
        
            expect(dialog.type()).toContain('prompt');
            expect(dialog.message()).toContain('Please enter your name:');
            expect(dialog.defaultValue()).toContain('Harry Potter');
            await dialog.accept('Manju'); 

        
        })
        await page.click("//button[.='Prompt']");
    
        await expect(page.locator("//p[@id='demo']")).toHaveText('Hello Manju! How are you today?');
        
        await page.waitForTimeout(5000);
        })