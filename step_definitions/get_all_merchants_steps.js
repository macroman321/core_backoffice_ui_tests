const {Given, When, Then} = require('cucumber')
const TestData = require('../util/test_data')

When('I select All merchants from Merchants link in menu bar', {timeout: 20000}, async function () {
	await this.mainPage.selectAllMerchants()
})

Then('I should get displayed list of merchants', {timeout: 20000}, async function () {
	await this.mainPage.listOfMerchants()
})