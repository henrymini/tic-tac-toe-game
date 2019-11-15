'use strict'
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')

const gameBoard = ['#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8', '#9']

const gameOver = () => {
  if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) {
    console.log('games over')
  } else if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) {
    console.log('game over')
  } else if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) {
    console.log('game over')
  } else if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) {
    console.log('games over')
  } else if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) {
    console.log('game over')
  } else if (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]) {
    console.log('game over')
  } else if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
    console.log('game over')
  } else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
    console.log('game over')
  }
}

let player = 'x'

const nextTurn = () => {
  if (player === 'x') {
    player = 'o'
    // console.log(player)
  } else {
    player = 'x'
    // console.log(player)
  }
}

const onClick = event => {
  event.preventDefault()
  gameOver()
  // console.log('clicked!')
  if ($(event.target).text() === '') {
    $(event.target).text(player)
    nextTurn()
  } else {
    console.log('the move is invalid')
  }
}

$('.box').on('click', onClick)

const newGame = event => {
  event.preventDefault()
  player = 'x'
  console.log('new game!')
  $('.square').text('')
}

$('#new-game').on('click', newGame)

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
