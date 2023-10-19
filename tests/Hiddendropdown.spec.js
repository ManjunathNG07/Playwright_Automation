import{test,expect}from'@playwright/test';

test(' handle Hidden dropdown',async({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

await page.fill('//input[@name="username"]','Admin');
await page.fill('//input[@name="password"]','admin123');
await page.click("//button[.=' Login ']");

await page.click("//span[.='PIM']");

await page.click('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[6]/div/div[2]/div/div/div[2]/i');

await page.waitForTimeout(3000);
const options=await page.$$('//div[@role="option"]//span');

for(const option of options){
    const value=await option.textContent();
     //console.log(value);
     if(value.includes('Chief Technical Officer')){
        await option.click();
        break;
     }

}
await page.waitForTimeout(5000);
})