// main_page.js
const Page = require('../page')
const util = require('../../util/util')

// Custom timeouts
const WAIT_TIME_SHORT = 5000
const WAIT_TIME_MEDIUM = 10000
const WAIT_TIME_LONG = 30000

class MainPage extends Page {
  constructor (world) {
    super(world)
  }

  // Page elements locators
  get userDropDownMenu () {return '[class="dropdown-toggle"]'}
  get clickUsersLink () {return '=Users'}
  get searchingOptions () {return '[name="searchCriteria"]'}
  get searchingField () {return '[name="searchPhrase"]'}
  get searchButton () {return '[class="btn btn-default"]'}


  // Page methods
  async openMainPage () {
    await super.open('gnation_profile', 'profile')
  }

  async verifyMainPage () {
    await this.webdriver.waitForVisible(this.userDropDownMenu, WAIT_TIME_MEDIUM)
  }

  async usersLink () {
    const link = await this.webdriver.elements(this.clickUsersLink, WAIT_TIME_MEDIUM)
    const value = link.value[1]
    const dax = Object.values(value)[0]
    await this.webdriver.elementIdClick(dax)
  }

  async searchUsersPage () {
    await this.webdriver.waitForVisible(this.searchingOptions, WAIT_TIME_MEDIUM)
    await this.webdriver.waitForVisible(this.searchingField, WAIT_TIME_MEDIUM)
    await this.webdriver.waitForVisible(this.searchButton, WAIT_TIME_MEDIUM)
  }
}

module.exports = MainPage
