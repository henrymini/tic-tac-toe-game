'use strict'

const store = require('../store')

const onSuccess = message => {
  $('#message')
    .removeClass('failure')
    .addClass('success')
    .text(message)
  $('input').val('')
  // $('form').trigger('reset')
}

const onFailure = message => {
  $('#message')
    .removeClass('success')
    .addClass('failure')
    .text(message)
  $('input').val('')
  // $('form').trigger('reset')
}

const onSignupSuccess = () => {
  onSuccess('welcome to the world of the Game')
}

const onSignupFailure = () => {
  onFailure('you are not worth the Game')
}

const onSigninSuccess = responseData => {
  store.user = responseData.user
  console.log(store)
  onSuccess('make your choice')
  $('.after-auth').show()
  $('.before-auth').hide()
}

const onSignInFailure = () => {
  onFailure('that is not an account')
}

module.exports = {
  onSignupSuccess,
  onSignupFailure,
  onSigninSuccess,
  onSignInFailure
}
