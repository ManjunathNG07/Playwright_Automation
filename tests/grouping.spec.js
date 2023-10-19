const {test,expect}=require('@playwright/test');

test.beforeEach(async()=>{
    console.log(' this is beforeEach congratulations the  test is passed!')
});
test.afterEach(async()=>{
    console.log(' this is afterEach congratulations the  test is passed!')
});
test.beforeAll(async()=>{
    console.log(' this is beforeAll congratulations the  test is passed!')
});
test.afterAll(async()=>{
    console.log(' this is afterall congratulations the  test is passed!')
});

test.describe('group1',()=>{
    test('test1',async({page})=>{
        console.log('congratulations the 1st test is passed!')
        });
        
    test('test2',async({page})=>{
            console.log('congratulations the 2 test is passed!')
        });


});

test.describe('group2',()=>{
    test('test3',async({page})=>{
        console.log('congratulations the 3 test is passed!')
        });
        
    test('test4',async({page})=>{
            console.log('congratulations the 4 test is passed!')
        });


})
