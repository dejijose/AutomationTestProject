Feature: Register functionality
  
  @checkout
  Scenario Outline: As a user, I can add a product to cart and checkout
    Given I am on the login automationteststore page
    When I am entering username and password
    And I clicked on Login
    And I navigated to <menu> and <submenu>
    Then I landed in <submenu> page
    When I clicked add to cart for <product>
    Then I validated product details
    When I added product to cart
    Then I should see correct <product> details on shopping cart
  
  Examples:
      | menu     | submenu              | product                                           |
      | Makeup   |     Eyes             | L'EXTRÊME Instant Extensions Lengthening Mascara  |
      | Books    |     Paperback        | Paper Towns by John Green                         |
      | Skincare |     Face             | Jasmin Noir Body Lotion 6.8 fl oz                 |
  
  