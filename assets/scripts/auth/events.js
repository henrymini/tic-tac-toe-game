'use strict'

// const getFormFields = require('../../../lib/get-form-fields')

const onSignup = event => {
  event.preventDefault()
}

const addHandlers = event => {
  $('#signup').on('submit', onSignup)
}

module.exports = {
  addHandlers
}
