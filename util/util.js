const assert = require('assert')

/**
 * Compare two numbers with the given precision (number of decimals)
 * @param {number} n1
 * @param {number} n2
 * @param {number} precision
 * @returns {boolean}
 *
 * Exmpales:
 *   compareTwoNumber(1.094, 1.093, 2) returns true
 */
exports.compareTwoNumbers = function (n1, n2, precision) {
  return n1.toFixed(precision) === n2.toFixed(precision)
}

/**
 * sleep as Promise
 *
 * Usage with async-await:
 *  await sleep(2000)
 *
 * Usage with promise:
 *  (todo)
 * @param {Date} milliseconds
 */
exports.sleep = function (milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

/**
 * return timestamp as number of milliseconds since 1970/01/01
 */
exports.timestamp = function () {
  const d = new Date()
  return d.getTime()
}

/**
 * Create unique name by adding a timestamp to the given prefix
 *
 * @returns: prefix + timestamp
 *
 * Examples:
 * createUniqueName('dragan') returns something like 'dragan1543504129244'
 */
exports.createUniqueName = function (prefix) {
  const name = prefix + exports.timestamp()
  return name
}

/**
 * Add timestamp to the first part of the given email
 * @param {string} email for example you@email.com
 * @return {string} you+timestamp@email.com
 */
exports.emailTimestamp = function (email) {
  const parts = email.split('@')
  return `${parts[0]}+${exports.timestamp()}@${parts[1]}`
}

/**
 * Attempts to run function 'func' until it succeeds or timeout expires.
 * Retry is made every 'wait' time.
 * Assumptions:
 * - 'func' must return false if not succesful
 * - 'func' receives only one argument (if you need more arguments you can e.g. make that one argument object)
 *
 * @param {Date} timeout in milliseconds
 * @param {Date} wait in milliseconds
 * @param {function} func
 * @param {*} arg
 * @returns {*} same value that 'func' returns if successfull
 * @throws {Error} Unable to complete ${func.name} in ${timeout} milliseconds!
 */
exports.runWithTimeout = async function (timeout, wait, func, arg) {
  const basetime = Date.now()
  while (Date.now() < basetime + timeout) {
    const r = await func(arg)
    if (r) {
      return r
    }

    await exports.sleep(wait)
  }

  throw Error(`Unable to complete ${func.name} in ${timeout} milliseconds!`)
}

// resetPassword or registrationVerification from temp-email are passed as argument refreshCallback
// purpose of the function is to detect if 2 emails have been sent for one reset password or registration request
// resetPassword and registrationVerification fuctions wait for email to be received
// when email is received then email is opened and reset password token or confirm account token are returned and email is deleted.
// passed functions are called twice and token's are stored in tempArray
// then token's are asserted with notEqual
// if they are equal `Duplicate emails detected!` message is displayed in log and test fails
exports.hasDuplicates = async function (emailSubject, linkText, refreshCallback) {
  let tempArray = []
  for (let i = 0; i < 2; i++) {
    tempArray.push(await refreshCallback(emailSubject, linkText))
  }

  const currPassToken = tempArray[tempArray.length - 1]
  const prevPassToken = tempArray[tempArray.length - 2]

  assert.notEqual(currPassToken, prevPassToken, `Duplicate emails detected!`)
}

/* eslint-disable no-cond-assign */
exports.getDistinctItemFromJSONlist = function (jsonList, itemName) {
  let lookup = {}
  let result = []

  for (var item, i = 0; item = jsonList[i++];) {
    var name = item[itemName]

    if (!(name in lookup)) {
      lookup[name] = 1
      result.push(name)
    }
  }
  return result
}
/* eslint-enable no-cond-assign */

exports.getArrayDifference = function (arr1, arr2) {
  let result = []
  arr1.forEach((e1) => {
    if (!(arr2.includes(e1))) {
      result.push(e1)
    }
  })
  return result
}
