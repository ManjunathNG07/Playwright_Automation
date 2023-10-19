Feature: Ecommerce Validation
  @Regression
  Scenario: Placeing the order
    Given  a login to Ecommerce application with "manjung654@gmail.com" and "Test@123"
    When add "zara coat 3" to Cart
    Then Verify "zara coat 3" is displayed in the Cart
    When Enter valid details and Place the order
    Then Verify order in present in the OrderHistory

  @Validation

  Scenario Outline: Placeing the order
    Given  a login to Ecommerce2 application with "<username>" and "<password>"
    Then Verify Error message is displayed

    Examples:
      | username              | password |
      | manjung654@gmail.com  | Test@123 |
      | sbsjvk@gmail.com      | st@123   |
      | gkjbsvbs654@gmail.com | Tt@123   |