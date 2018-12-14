const {Given, When, Then} = require('cucumber')
const TestData = require('../util/test_data')

When('I click on link About Panel', {timeout: 20000}, async function () {
	await this.mainPage.clickAboutPanelLink()
})

When('I should see informations of given link', {timeout: 20000}, async function () {
	await this.mainPage.aboutPanelInformations()
})