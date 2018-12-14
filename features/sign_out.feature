#
# FILE NAME: sign_out.feature
# DESCRIPTION: sign out FEATURE
# AUTHOR: Danilo Cupic (DC)
# CREATED: 14-Dec-2018
# NOTES:
#

Feature: Sign out

  Scenario: As Admin I want to sgn out from Bacoffice
    Given I log in as a user "qa_admin_1"
    When I press the login button
    And I click on Sign out button
    Then I should be redirected to the Home page