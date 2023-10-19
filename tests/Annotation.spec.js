import{test,expect}from'@playwright/test';
//only
// test.only('Test1',async({page})=>{
// console.log('test1 is executed successfully');
// });

//skip
test.skip('Test2',async({page})=>{

    console.log('test2 is executed successfully');
});

test('Test3',async({page,browserName})=>{
if(browserName==='chromium'){
    test.skip();
}
    console.log('test3 is executed successfully');
});

//fixme()

test('Test4',async({page})=>{
    test.fixme();
    console.log('test4 is executed successfully');
 });
//slow
test('Test5',async({page})=>{
    test.slow();
 console.log('test5 is executed successfully');
  });

  //settimeout
test('Test6',async({page})=>{
    test.setTimeout(5000);
 console.log('test6 is executed successfully');
  });
//fail()
  test('Test7',async({page})=>{
    test.fail();
 console.log('test7 is executed successfully');
  });