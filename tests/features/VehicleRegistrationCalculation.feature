Feature: Vehicle Registration Calculation
  As a user
  I want to calculate vehicle registration amount
  So that I can know the duty payable based on my purchase price

Scenario: Verify vehicle registration calculation
    Given I am on the homepage
    When I click on the "Check Online" button
    Then I should be navigated to the Revenue Calculator page
    When I select the Registration radio button
    And I enter the purchase price "<purchase_price>"
    And I click on the "Calculate" button
    Then I should see the calculator modal header
    And I should see the registration amount details showing duty payable "<duty_payable>" for purchase price "<purchase_price>"

    Examples:
        | purchase_price | duty_payable | 
        | 1000  | 30  |
        | 30000  | 900  |
