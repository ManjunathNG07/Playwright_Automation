Feature: Ecommerce Validation
@Validation
@foo
  Scenario Outline: Placeing the order
    Given  a login to Ecommerce2 application with "<username>" and "<password>"
   Then Verify Error message is displayed

   Examples:
       | username                 | password     | 
       | manjung654@gmail.com     | Test@123     | 
       | sbsjvk@gmail.com         | st@123       | 
       | gkjbsvbs654@gmail.com    | Tt@123       | 