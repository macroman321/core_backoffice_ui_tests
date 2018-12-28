const {Given, When, Then} = require('cucumber')
const TestData = require('../util/test_data')

When('I select All merchants from Merchants link in menu bar', {timeout: 20000}, async function () {
	await this.mainPage.selectAllMerchants()
})

When('I click on a Merchant from a Merchant\'s list', {timeout: 20000}, async function () {
	await this.mainPage.clickOnMerchantFromList()
})

When('I do deposit on merchant balance', {timeout: 20000}, async function () {
	await this.mainPage.depositOnMerchantAccount()
})