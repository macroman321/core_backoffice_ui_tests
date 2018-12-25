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
  get searchUsersLink () {return '=Search users'}
  get usersInformations () {return '[class="wrap-td"]'}
  get searchWithGNationgId () {return '[value="GNATION_ID"]'}
  get searchWithUsername () {return '[value="USERNAME"]'}
  get sortOrder () {return '[name="sortOrder"]'}
  get sortBy () {return '[name="sortBy"]'}
  get applyButton () {return '[class="btn btn-info"]'}
  get getTableRow () {return '[class="table table-striped"]'}
  get badRequest () {return '[class="starter-template"]'}
  get ascendingOption () {return '[value="asc"]'}
  get descendingOption () {return '[value="desc"]'}
  get sortByEmail () {return '[value="email"]'}
  get sortByUsername () {return '[value="username"]'}
  get sortByLastLogin () {return '[value="lastLogin"]'}
  get sortByFirstName () {return '[value="firstName"]'}
  get sortByLastName () {return '[value="lastName"]'}
  get nextPageOption() {return '=Next page'}
  get pageNumber() {return '[class="pager"]'}

  get danilo () {return '[class="starter-template"]'}


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
    const element = Object.values(value)[0]
    await this.webdriver.elementIdClick(element)
  }

  async searchUsersPage () {
    await this.webdriver.waitForVisible(this.searchingOptions, WAIT_TIME_MEDIUM)
    await this.webdriver.waitForVisible(this.searchingField, WAIT_TIME_MEDIUM)
    await this.webdriver.waitForVisible(this.searchButton, WAIT_TIME_MEDIUM)
  }

  async usersSearchLink () {
    await this.webdriver.waitForVisible(this.clickUsersLink, WAIT_TIME_MEDIUM)
    await this.webdriver.click(this.clickUsersLink, WAIT_TIME_MEDIUM)
    await this.webdriver.waitForVisible(this.searchUsersLink, WAIT_TIME_MEDIUM)
    await this.webdriver.click(this.searchUsersLink)
  }

  async searchWithAccountEmailI () {
    await this.webdriver.waitForVisible(this.searchingField, WAIT_TIME_SHORT)
    await this.webdriver.setValue(this.searchingField, 'qa.at_user_200@gamecredits.com')
    await this.webdriver.waitForVisible(this.searchButton, WAIT_TIME_MEDIUM)
    await this.webdriver.click(this.searchButton)
  }

  async checkInformationsGotedByAccountEmail () {

    const link = await this.webdriver.elements(this.usersInformations, WAIT_TIME_MEDIUM)
    const value = link.value[0]
    const element = Object.values(value)[0]    
    const elements = await this.webdriver.elementIdText(element)
    const elementsValue = elements.value
    if (elementsValue !== 'c5097a7eb03843a782a1d598785ef433') {
      throw new Error('gid does not exist!')
    }

    const link1 = await this.webdriver.elements(this.usersInformations, WAIT_TIME_MEDIUM)
    const value1 = link1.value[2]
    const element1 = Object.values(value1)[0]
    const elements1 = await this.webdriver.elementIdText(element1)
    const elementsValue1 = elements1.value
    if (elementsValue1 !== 'qa_user_200') {
      throw new Error('Username does not exist!')
    }

    const link2 = await this.webdriver.elements(this.usersInformations, WAIT_TIME_MEDIUM)
    const value2 = link2.value[3]
    const element2 = Object.values(value2)[0]
    const elements2 = await this.webdriver.elementIdText(element2)
    const elementsValue2 = elements2.value
    if (elementsValue2 !== 'qa.at_user_200@gamecredits.com') {
      throw new Error('Email does not exist!')
    }

    const table = await this.webdriver.element(this.getTableRow).elements('tr')
    const row = table.value[1]
    const row1 = Object.values(row)[0]
    const row2 = await this.webdriver.elementIdText(row1)
    const row3 = row2.value
  }

  async searchWithGid () {
    await this.webdriver.waitForVisible(this.searchingOptions, WAIT_TIME_SHORT)
    await this.webdriver.click(this.searchingOptions)
    await this.webdriver.click(this.searchWithGNationgId)
    await this.webdriver.waitForVisible(this.searchingField, WAIT_TIME_SHORT)
    await this.webdriver.setValue(this.searchingField, 'c5097a7eb03843a782a1d598785ef433')
    await this.webdriver.waitForVisible(this.searchButton, WAIT_TIME_MEDIUM)
    await this.webdriver.click(this.searchButton)
  }

  async searchUsingUsername () {
    await this.webdriver.waitForVisible(this.searchingOptions, WAIT_TIME_SHORT)
    await this.webdriver.click(this.searchingOptions)
    await this.webdriver.click(this.searchWithUsername)
    await this.webdriver.waitForVisible(this.searchingField, WAIT_TIME_SHORT)
    await this.webdriver.setValue(this.searchingField, 'qa_user_200')
    await this.webdriver.waitForVisible(this.searchButton, WAIT_TIME_MEDIUM)
    await this.webdriver.click(this.searchButton)
  }

  async searchByEmailWithEmptyField () {
    await this.webdriver.waitForVisible(this.searchingField, WAIT_TIME_SHORT)
    await this.webdriver.waitForVisible(this.searchButton, WAIT_TIME_MEDIUM)
    await this.webdriver.click(this.searchButton)
  }

  async listOfAllUsers () {
    await this.webdriver.element(this.getTableRow).elements('tr')
  }

  async searchByUsernameWithEmptyField () {
    await this.webdriver.waitForVisible(this.searchingOptions, WAIT_TIME_SHORT)
    await this.webdriver.waitForVisible(this.searchingField, WAIT_TIME_SHORT)
    await this.webdriver.waitForVisible(this.searchButton, WAIT_TIME_MEDIUM)
    await this.webdriver.click(this.searchingOptions)
    await this.webdriver.click(this.searchWithUsername)
    await this.webdriver.click(this.searchButton)
  }

  async searchByGidWithEmptyField () {
    await this.webdriver.waitForVisible(this.searchingOptions, WAIT_TIME_SHORT)
    await this.webdriver.waitForVisible(this.searchingField, WAIT_TIME_SHORT)
    await this.webdriver.waitForVisible(this.searchButton, WAIT_TIME_MEDIUM)
    await this.webdriver.click(this.searchingOptions)
    await this.webdriver.click(this.searchWithGNationgId)
    await this.webdriver.click(this.searchButton)
  }

  async badRequestMessage () {
    await this.webdriver.waitForVisible(this.badRequest, WAIT_TIME_SHORT)
    await this.webdriver.getText(this.badRequest)
  }

  async ascOption () {
    await this.webdriver.waitForVisible(this.sortOrder, WAIT_TIME_MEDIUM)
    await this.webdriver.click(this.sortOrder)
    await this.webdriver.click(this.descendingOption)
    await util.sleep(1000)
    await this.webdriver.waitForVisible(this.sortOrder, WAIT_TIME_MEDIUM)
    await this.webdriver.click(this.sortOrder)
    await this.webdriver.click(this.ascendingOption)
    await this.webdriver.waitForVisible(this.sortBy, WAIT_TIME_MEDIUM)
    await this.webdriver.click(this.sortByLastName)
    await this.webdriver.waitForVisible(this.sortBy, WAIT_TIME_MEDIUM)
    await this.webdriver.click(this.sortByFirstName)
    await this.webdriver.waitForVisible(this.sortBy, WAIT_TIME_MEDIUM)
    await this.webdriver.click(this.sortByLastLogin)
    await this.webdriver.waitForVisible(this.sortBy, WAIT_TIME_MEDIUM)
    await this.webdriver.click(this.sortByUsername)
    await this.webdriver.waitForVisible(this.sortBy, WAIT_TIME_MEDIUM)
    await this.webdriver.click(this.sortByEmail)
    await this.webdriver.click(this.applyButton)
  }

  async descOption () {
    await this.webdriver.waitForVisible(this.sortOrder, WAIT_TIME_MEDIUM)
    await this.webdriver.click(this.sortOrder)
    await this.webdriver.click(this.descendingOption)
    await this.webdriver.waitForVisible(this.sortBy, WAIT_TIME_MEDIUM)
    await this.webdriver.click(this.sortByLastName)
    await this.webdriver.waitForVisible(this.sortBy, WAIT_TIME_MEDIUM)
    await this.webdriver.click(this.sortByFirstName)
    await this.webdriver.waitForVisible(this.sortBy, WAIT_TIME_MEDIUM)
    await this.webdriver.click(this.sortByLastLogin)
    await this.webdriver.waitForVisible(this.sortBy, WAIT_TIME_MEDIUM)
    await this.webdriver.click(this.sortByUsername)
    await this.webdriver.waitForVisible(this.sortBy, WAIT_TIME_MEDIUM)
    await this.webdriver.click(this.sortByEmail)
    await this.webdriver.click(this.applyButton)
  }

  async clickNextPageButton () {
    await this.webdriver.waitForVisible(this.nextPageOption, WAIT_TIME_MEDIUM)
    const pageNumberOne = await this.webdriver.getText(this.pageNumber)
    this.fisrtPage = pageNumberOne.slice(0, 1)
    
    await this.webdriver.click(this.nextPageOption)
  }

  async confirmNextPage () {
    await this.webdriver.waitForVisible(this.nextPageOption, WAIT_TIME_MEDIUM)
    const pageNumberTwo = await this.webdriver.getText(this.pageNumber)
    this.secondPage = pageNumberTwo.slice(14, 15)
    await this.webdriver.element(this.getTableRow).elements('tr')

    if (this.fisrtPage === this.secondPage) {
      throw new Error('Wrong page')
    }
  }

  async confirmNumberOfUsers () {
    const foundNumberOfUsers = await this.webdriver.$('h5').getText();
    const numberOfUsers = foundNumberOfUsers.slice(7, 10)
    if (numberOfUsers < 0) {
      throw new Error('Number of users is less than zero!')
    }
  }

}

module.exports = MainPage
