#
# FILE NAME: about_panel.feature
# DESCRIPTION: about panel FEATURE
# AUTHOR: Danilo Cupic (DC)
# CREATED: 14-Dec-2018
# NOTES:
#

Feature: About Panel

  Scenario: As Admin I want to go to page About Panel	
    Given I log in as a user "qa_admin_1"
    When I press the login button
    And I click on link About Panel
    Then I should see informations of given link