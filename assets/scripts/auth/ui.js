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
  // $('.after-auth').show()
  // $('.before-auth').hide()
}

const onSignupFailure = () => {
  onFailure('you are not worth the Game')
}

const onSigninSuccess = responseData => {
  store.user = responseData.user
  // console.log(store)
  onSuccess('make your choice')
  $('.after-auth').show()
  $('.before-auth').hide()
  // console.log('sign in worked')
}

const onSigninFailure = () => {
  onFailure('that is not an account')
}

const onChangePasswordSuccess = () => {
  onSuccess('you have changed your password')
}

const onChangePasswordFailure = () => {
  onFailure('you have not changed your password')
}

const onSignoutSuccess = responseData => {
  store.user = store
  onSuccess('you will be back')
  $('.before-auth').show()
  $('.after-auth').hide()
  $('.container-fluid').hide()
  // $('.game-board').hide()
  // console.log('signed out')
}

const onSignoutFailure = () => {
  onFailure('you have not signed out')
}

module.exports = {
  onSignupSuccess,
  onSignupFailure,
  onSigninSuccess,
  onSigninFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignoutSuccess,
  onSignoutFailure
}
