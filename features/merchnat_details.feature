#
# FILE NAME: merchant_details.feature
# DESCRIPTION: merchant details FEATURE
# AUTHOR: Danilo Cupic (DC)
# CREATED: 26-Dec-2018
# NOTES:
#

Feature: Merchant Details

  Scenario: As Admin I want to deposit merchants checking account
    Given I log in as a user "qa_admin_1"
    When I press the login button
    And I select All merchants from Merchants link in menu bar
    And I click on a Merchant from a Merchant's list
    And I do deposit on merchant balance
    # Then I should see balance has increased

  Scenario: As Admin I want to withdraw merchants checking account
    Given I log in as a user "qa_admin_1"
    When I press the login button
    And I select All merchants from Merchants link in menu bar
    And I click on a Merchant from a Merchant's list
    And I do withdraw on merchant balance
    Then I should see balance has decreased
