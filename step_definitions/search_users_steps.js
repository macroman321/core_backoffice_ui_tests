const {Given, When, Then} = require('cucumber')
const TestData = require('../util/test_data')

When('I click on link Users on main page', {timeout: 20000}, async function () {
	await this.mainPage.usersLink()
})

Then('I should be redirected to Search users page', {timeout: 20000}, async function () {
	await this.mainPage.searchUsersPage()
})