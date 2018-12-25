#
# FILE NAME: search_users.feature
# DESCRIPTION: search users FEATURE
# AUTHOR: Danilo Cupic (DC)
# CREATED: 20-Dec-2018
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

	Scenario: As Admin I want to search users by account email
		Given I log in as a user "qa_admin_1"
    When I press the login button
		And I click on link Users on main page
		And I search user with option account email
		Then I should get search results about wanted user

	Scenario: As Admin I want to search users by G nation ID
		Given I log in as a user "qa_admin_1"
    When I press the login button
		And I click on link Users on main page
		And I search user with option G nation ID
		Then I should get search results about wanted user	

	Scenario:	As Admin I want to search users by Username
		Given I log in as a user "qa_admin_1"
    When I press the login button
		And I click on link Users on main page
		And I search user with option Username
		Then I should get search results about wanted user

	Scenario: As Admin I want to search all of users by Account email
		Given I log in as a user "qa_admin_1"
    When I press the login button
		And I click on link Users on main page
		And I search user with option Account email without entering any email
		Then I should get list of all Users

	Scenario: As Admin I want to search all of users by Username
		Given I log in as a user "qa_admin_1"
    When I press the login button
		And I click on link Users on main page
		And I search user with option Username without entering any username
		Then I should get list of all Users

	Scenario: As Admiin I cannot search all of users by G nation ID
		Given I log in as a user "qa_admin_1"
    When I press the login button
		And I click on link Users on main page
		And I search user with option G nation ID without entering any G nation ID
		Then I should get bad request message

	Scenario: Sort Ascending by Email, Username, Frst Name, Last name, Last login
		Given I log in as a user "qa_admin_1"
    When I press the login button
		And I click on link Users on main page
		And I search user with option Username
		Then I sort search result by ascending with given parameters

	Scenario: Sort Descending by Email, Username, Frst Name, Last name, Last login
		Given I log in as a user "qa_admin_1"
    When I press the login button
		And I click on link Users on main page
		And I search user with option Username
		Then I sort search result by descending with given parameters

	Scenario: As Admin I want to go to Next page to see other users
		Given I log in as a user "qa_admin_1"
    When I press the login button
		And I click on link Users on main page
		And I search user with option Account email without entering any email
		And I click on next page button
		Then I should be redirected to next page

	Scenario: As Admin I want to see number of current Users
		Given I log in as a user "qa_admin_1"
    When I press the login button
		And I click on link Users on main page
		And I search user with option Account email without entering any email
		Then I should see number of current users