import{test,expect}from'@playwright/test';

test('Test1 @fun',async({page})=>{
console.log('test1 is executed successfully');
});

test('Test2 @fun',async({page})=>{
    console.log('test2 is executed successfully');
});

test('Test3@run',async({page})=>{
    console.log('test3 is executed successfully');
});

test('Test4@run',async({page})=>{
    console.log('test4 is executed successfully');
 });

test('Test5@fun@run',async({page})=>{
 console.log('test5 is executed successfully');
  });