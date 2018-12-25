const {Given, When, Then} = require('cucumber')
const TestData = require('../util/test_data')

When('I click on link Users on main page', {timeout: 20000}, async function () {
	await this.mainPage.usersLink()
})

Then('I should be redirected to Search users page', {timeout: 20000}, async function () {
	await this.mainPage.searchUsersPage()
})

When('I click on link Users in menu bar, choosing Search users', {timeout: 20000}, async function () {
	await this.mainPage.usersSearchLink()
})

When('I search user with option account email', {timeout: 20000}, async function () {
	await this.mainPage.searchWithAccountEmailI()
})

Then('I should get search results about wanted user', {timeout: 20000}, async function () {
	await this.mainPage.checkInformationsGotedByAccountEmail()
})

When('I search user with option G nation ID', {timeout: 20000}, async function () {
	await this.mainPage.searchWithGid()
})

When('I search user with option Username', {timeout: 20000}, async function () {
	await this.mainPage.searchUsingUsername()
})

When('I search user with option Account email without entering any email', {timeout: 20000}, async function () {
	await this.mainPage.searchByEmailWithEmptyField()
})

Then('I should get list of all Users', {timeout: 20000}, async function () {
	await this.mainPage.listOfAllUsers()
})

When('I search user with option Username without entering any username', {timeout: 20000}, async function () {
	await this.mainPage.searchByUsernameWithEmptyField()
})

When('I search user with option G nation ID without entering any G nation ID', {timeout: 20000}, async function () {
	await this.mainPage.searchByGidWithEmptyField()
})

Then('I should get bad request message', {timeout: 20000}, async function () {
	await this.mainPage.badRequestMessage()
})

Then('I sort search result by ascending with given parameters', {timeout: 20000}, async function () {
	await this.mainPage.ascOption()
})

Then('I sort search result by descending with given parameters', {timeout: 20000}, async function () {
	await this.mainPage.descOption()
})

When('I click on next page button', {timeout: 20000}, async function () {
	await this.mainPage.clickNextPageButton()
})

Then('I should be redirected to next page', {timeout: 20000}, async function () {
	await this.mainPage.confirmNextPage()
})

Then('I should see number of current users', {timeout: 20000}, async function () {
	await this.mainPage.confirmNumberOfUsers()
})