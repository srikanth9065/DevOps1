Feature: Login as a registered user
   As a user I want to be able to login
   with user id and password
   so that I can buy products.

   Background: I am on our grocery shop page
     Given that I could see the Login button

   Scenario: By clicking on login button
        Given that I should be able to see the login page
        When I enter Email as "anna.larsson@gmail.com" 
        And "12345678" as password
        Then I click on login button
        And I should be able to see "Logout anna.larsson@gmail.com"
        And so that I could see that I logged in as a user
