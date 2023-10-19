import {test,expect}from'@playwright/test';
import { table } from 'console';
test('handle Web-Table',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');


//count the no of rows and columns
 const table=await page.locator('//table[@id="productTable"]');
const columns= await table.locator('thead tr th');
console.log('count:' , await columns.count());
expect( await columns.count()).toBe(4);

 const rows=await table.locator('tbody tr');
 console.log('rows:', await rows.count());
  expect( await rows.count()).toBe(5);


 
 //selecting the particular row checkbox

 const matchedrow=rows.filter({
    has:page.locator('td'),
    hasText:'product 3'

 })
 await matchedrow.locator('input').check();

 //selecting multiple products  using re-useable function

await selectproduct(rows,page,'Product 1');
await selectproduct(rows,page,'Product 2');
await selectproduct(rows,page,'Product 4');

//printing all the data inside the table
await page.waitForTimeout(2000);
for( let i=0;i<await rows.count();i++){
    const row=rows.nth(i);
    const tds =row.locator('td');

    for(let j=0;j<await tds.count()-1 ;j++){
   console.log(await tds.nth(j).textContent());
    }
}
await page.waitForTimeout(2000);




//read the data from all the pages of webtable
const pages=await page.locator('.pagination li a');
console.log(await pages.count());

for(let p=0;p< await pages.count();p++){

    if(p>0){
        await pages.nth(p).click();
    }
    for( let i=0;i<await rows.count();i++){
        const row=rows.nth(i);
        const tds =row.locator('td');
    
        for(let j=0;j<await tds.count()-1 ;j++){
       console.log(await tds.nth(j).textContent());
        }
    }
    await page.waitForTimeout(3000);
}
await page.waitForTimeout(3000);


})


 async function selectproduct(rows,page,name){
    const matchingrow=rows.filter({
        has:page.locator('td'),
        hasText:name
    })
    await matchingrow.locator('input').check();

}