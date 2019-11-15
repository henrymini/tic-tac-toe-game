'use strict'
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')

const gameBoard = ['', '', '', '', '', '', '', '', '']

let player = 'x'

const nextTurn = () => {
  if (player === 'x') {
    player = 'o'
    console.log(player)
  } else {
    player = 'x'
    console.log(player)
  }
}

const onClick = event => {
  event.preventDefault()
  console.log('clicked!')
  if ($(event.target).text() === '') {
    $(event.target).text(player)
    nextTurn()
  } else {
    console.log('the move is invalid')
  }
}

$('.box').on('click', onClick)

const onSignup = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signup(formData)
  console.log(formData)
  // console.log('im in')
}

const onSignin = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signin(formData)
  console.log(formData)
}

const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changepw(formData)
  console.log(formData)
}

const onSignout = event => {
  event.preventDefault()
  api.signout()
  console.log('signed out')
}

const addHandlers = event => {
  $('#signup').on('submit', onSignup)
  $('#signin').on('submit', onSignin)
  $('#changepw').on('submit', onChangePassword)
  $('#signout').on('submit', onSignout)
}

module.exports = {
  addHandlers
}
