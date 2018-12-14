#
# FILE NAME: login.feature
# DESCRIPTION: login FEATURE
# AUTHOR: Danilo Cupic (DC)
# CREATED: 13-Dec-2018
# NOTES:
#

Feature: Search Users

  Scenario: As Admin I want to click on link Users and be redirected on search users page	
    Given I log in as a user "qa_admin_1"
    When I press the login button
		And I click on link Users on main page
    Then I should be redirected to Search users page

	Scenario: As Admin I want to search users through users link in menu bar
		Given I log in as a user "qa_admin_1"
    When I press the login button
		And I click on link Users in menu bar, choosing Search users
		Then I should be redirected to Search users page

	Scenario: As Admin I want to serach users by account email
		Given I log in as a user "qa_admin_1"
    When I press the login button
		And I click on Users link on main page
		And I serach user with option account email
		Then I should get search results about wanted user

	Scenario: As Admin I want to serach users by G nation ID
		Given I log in as a user "qa_admin_1"
    When I press the login button
		And I click on Users link on main page
		And I serach user with option G nation ID
		Then I should get search results about wanted user	

	Scenario:	As Admin I want to serach users by Username
		Given I log in as a user "qa_admin_1"
    When I press the login button
		And I click on Users link on main page
		And I serach user with option Username
		Then I should get search results about wanted user