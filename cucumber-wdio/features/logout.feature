Feature: Logout
    As a user I want to be able to Logout

    Scenario: Clicking login button
        Given that I can see the login button
        When I click the login button at the navbar
        And I should be seen Login form
        When I fill in the form with "anna.larsson@gmail.com" and "12345678"
        When I click the login button in the form
        And I should be logged in and see Logout button
        Then I click the Logout button
        And I should be logged out and should see the login button