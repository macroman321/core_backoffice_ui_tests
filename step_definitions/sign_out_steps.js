const {Given, When, Then} = require('cucumber')
const TestData = require('../util/test_data')

When('I click on Sign out button', {timeout: 20000}, async function () {
	await this.mainPage.clickSignOutButton()
})

Then('I should be redirected to the Home page', {timeout: 20000}, async function () {
	await this.loginPage.loginPageElements()
})