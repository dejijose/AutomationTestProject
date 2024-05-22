Feature: Register functionality
  
  @Register
  Scenario: As a new user, I can navigate to register screen

    Given I am on the login automationteststore page
    When I am selecting checkout option as Register account
    Then I am landing on Registration page
    And I should see the Details section
  
  
  @Register
  Scenario: As a new user, I can register into the automationteststore with valid details

    Given I am on the login automationteststore page
    When I am selecting checkout option as Register account
    And I enter valid data for input fields
    And I select NewsLetter Subscrible as No
    And I agreed to Privacy Policy
    #And I clicked on continue
    Then My Account should get created successfully 


