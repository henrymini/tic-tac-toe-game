'use strict'
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

// let player = 'x'
//
// const nextTurn = () => {
//   if (player === 'x') {
//     player = 'o'
//     // console.log(player)
//   } else {
//     player = 'x'
//     // console.log(player)
//   }
// }

// const onClick = event => {
//   event.preventDefault()
//   // gameOver(event.target)
//   console.log('clicked!')
//   if ($(event.target).text() === '') {
//     $(event.target).text(player)
//     nextTurn()
//   } else {
//     console.log('the move is invalid')
//   }
// }
//
// $('.box').on('click', onClick)

const onSignup = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signup(formData)
    .then(ui.onSignupSuccess)
    // .then(console.log('worked'))
    .catch(ui.onSignupFailure)
  // console.log(formData)
  // console.log('signed up')
}

const onSignin = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signin(formData)
    .then(ui.onSigninSuccess)
    .catch(ui.onSigninFailure)
  // console.log(formData)
  // console.log('signed in')
}

const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changepw(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
  // console.log(formData)
}

const onSignout = event => {
  event.preventDefault()
  api.signout()
    .then(ui.onSignoutSuccess)
    .catch(ui.onSignoutFailure)
  // console.log('yeeeeeeee')
}

const addHandlers = event => {
  // $('.box').on('click', onClick)
  // $('#new-game').on('click', newGame)
  $('#signup').on('submit', onSignup)
  $('#signin').on('submit', onSignin)
  $('#changepw').on('submit', onChangePassword)
  $('#signout').on('submit', onSignout)
}

module.exports = {
  addHandlers
}
