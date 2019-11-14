'use strict'

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

module.exports = {
  onSignupSuccess,
  onSignupFailure
}
