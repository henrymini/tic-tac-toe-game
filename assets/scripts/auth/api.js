'use strict'

const config = require('../config')

const signup = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

module.exports = {
  signup
}
