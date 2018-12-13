#
# FILE NAME: login.feature
# DESCRIPTION: login FEATURE
# AUTHOR: Danilo Cupic (DC)
# CREATED: 13-Dec-2018
# NOTES:
#

Feature: Login Backoffice

  Scenario: As Admin I want login to Backoffice
    Given I log in as a user "qa_admin_1"
    When I press the login button
    Then I should see that I am logged in

  Scenario: As Regular user I want to login to Backoffice
    Given I log in as a user "qa_regular_1"
    When I press the login button
    Then I should see error message