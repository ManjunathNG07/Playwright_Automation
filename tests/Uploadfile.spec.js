const {test,expect}=require('@playwright/test');
test('upload file',async({page})=>{

    await page.goto('https://www.foundit.in/');

    //single file
    await page.waitForSelector('.mqfihd-upload');
    await page.locator('.mqfihd-upload').click();


    await page.locator('#file-upload').setInputFiles('tests/uploadfiles/resume.pdf');


await page.waitForTimeout(5000);

})


test('upload multiple file',async({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.locator('#filesToUpload').setInputFiles(['tests/uploadfiles/resume.pdf','tests/uploadfiles/cv manju.pdf']);  

    
        await page.waitForTimeout(4000);
//remove files
        await page.locator('#filesToUpload').setInputFiles([]); 


        expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected');
        await page.waitForTimeout(4000);

})