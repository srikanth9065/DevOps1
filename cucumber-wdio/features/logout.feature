Feature: Registered user log out 
    As a user, I should be able to log out whenever I want 
    by simply clicking logout button. 

  Background: I am on grocery shop page  
    Given I logged in to grocery shop 

    Scenario: By clicking the log out button, I should be able to logout  
        Given I should see that I logged in and can see the logout button        
        When I click on logout button 
        Then I should be successfully logged out
        And be able to see the login button again.