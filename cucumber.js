/* Report generating
npx cucumber-js features/Ecommerce.feature --parallel 2  --exit --format html:cucumber-report.html 

parallel execution
npx cucumber-js features/Ecommerce.feature --parallel 2  --exit 

using tags
 npx cucumber-js --tags "@foo"  --exit  

 retry
  npx cucumber-js --tags "@Regression" --retry 1 --exit


  allure reports
  ----------------------------------------------------
   step1:  npx playwright test clientApp2.spec.js --project chromium --headed --reporter=line,allure-playwright
   step2: allure generate my-allure-results -o allure-report --clean 
   step3: allure serve allure-results 
 
 
 only
  npx cucumber-js features/ErrorValidations.feature --exit   */