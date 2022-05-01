Feature: Product description
  As a user I want to be able to click on the product so
  that I can see the product details

  Scenario: Clicking on the product name
    Given I am on the home page with product list
    When I click on the product title "Cookies Oatmeal Sugary"
    Then I see page with product "Cookies Oatmeal Sugary" details