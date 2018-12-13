const {Given, When, Then} = require('cucumber')
const TestData = require('../util/test_data')

Given('I log in as a user {string}', {timeout: 20000}, async function (userId) {
	const user = TestData.getUser(userId)
	this.logger.debug(`user = ${JSON.stringify(user)}`)
	await this.loginPage.openLoginPage()
	await this.loginPage.login(user.username, user.password)
})

When('I press the login button', {timeout: 20000}, async function () {
	await this.loginPage.clickLoginButton()
})

Then('I should see that I am logged in', {timeout:20000}, async function () {
	await this.mainPage.verifyMainPage()
})

When('I should see error message', {timeout:20000}, async function () {
	await this.loginPage.accesDeniedRegularUserNotification()
})