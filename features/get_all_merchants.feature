#
# FILE NAME: get_all_merchants.feature
# DESCRIPTION: get all merchants FEATURE
# AUTHOR: Danilo Cupic (DC)
# CREATED: 25-Dec-2018
# NOTES:
#

Feature: Get All Merchants

  Scenario: As Admin I want to get all merchants through Merchants link in menu bar
    Given I log in as a user "qa_admin_1"
    When I press the login button
    And I select All merchants from Merchants link in menu bar
    Then I should get displayed list of merchants