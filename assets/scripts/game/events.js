'use strict'
const api = require('./api')
const ui = require('./ui')
// const store = require('../store')

let gameBoard = []
let over = false
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

const newGame = event => {
  event.preventDefault()
  player = 'x'
  gameBoard = []
  console.log('new game!')
  $('.square').text('')
  api.create()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
  $('#message').text('')
  over = false
}

let winConditional = false

const checkForWinner = () => {
  if (gameBoard[0] === 'x' && gameBoard[1] === 'x' && gameBoard[2] === 'x') {
    winConditional = true
    return 'X has won!'
  } else if (gameBoard[3] === 'x' && gameBoard[4] === 'x' && gameBoard[5] === 'x') {
    winConditional = true
    return 'X has won!'
  } else if (gameBoard[6] === 'x' && gameBoard[7] === 'x' && gameBoard[8] === 'x') {
    winConditional = true
    return 'X has won!'
  } else if (gameBoard[0] === 'x' && gameBoard[3] === 'x' && gameBoard[6] === 'x') {
    winConditional = true
    return 'X has won!'
  } else if (gameBoard[1] === 'x' && gameBoard[4] === 'x' && gameBoard[7] === 'x') {
    winConditional = true
    return 'X has won!'
  } else if (gameBoard[2] === 'x' && gameBoard[5] === 'x' && gameBoard[8] === 'x') {
    winConditional = true
    return 'X has won!'
  } else if (gameBoard[0] === 'x' && gameBoard[4] === 'x' && gameBoard[8] === 'x') {
    winConditional = true
    return 'X has won!'
  } else if (gameBoard[2] === 'x' && gameBoard[4] === 'x' && gameBoard[6] === 'x') {
    winConditional = true
    return 'X has won!'
  }
  if (gameBoard[0] === 'o' && gameBoard[1] === 'o' && gameBoard[2] === 'o') {
    winConditional = true
    return 'O has won!'
  } else if (gameBoard[3] === 'o' && gameBoard[4] === 'o' && gameBoard[5] === 'o') {
    winConditional = true
    return 'O has won!'
  } else if (gameBoard[6] === 'o' && gameBoard[7] === 'o' && gameBoard[8] === 'o') {
    winConditional = true
    return 'O has won!'
  } else if (gameBoard[0] === 'o' && gameBoard[3] === 'o' && gameBoard[6] === 'o') {
    winConditional = true
    return 'O has won!'
  } else if (gameBoard[1] === 'o' && gameBoard[4] === 'o' && gameBoard[7] === 'o') {
    winConditional = true
    return 'O has won!'
  } else if (gameBoard[2] === 'o' && gameBoard[5] === 'o' && gameBoard[8] === 'o') {
    winConditional = true
    return 'O has won!'
  } else if (gameBoard[0] === 'o' && gameBoard[4] === 'o' && gameBoard[8] === 'o') {
    winConditional = true
    return 'O has won!'
  } else if (gameBoard[2] === 'o' && gameBoard[4] === 'o' && gameBoard[6] === 'o') {
    winConditional = true
    return 'O has won!'
  }
}

const checkForTie = () => {
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] === '') {
      return false
    }
  }
  return true
}

const onCreateGame = event => {
  event.preventDefault()
  api.create()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
  over = false
}

const onGetStats = () => {
  event.preventDefault()
  api.index()
    .then(ui.onGetStatsSuccess)
    .catch(ui.onGetStatsSuccess)
}

const onGridClick = event => {
  if (over === false) {
    event.preventDefault()
    const index = $(event.target).data('square')
    const value = player
    gameBoard[index] = value
    if ($(event.target).text() === '') {
      $(event.target).text(player)
      nextTurn()
      const winner = checkForWinner()
      if (winConditional === true) {
        $('#message').text(winner)
        over = true
      } else if ((gameBoard.length === 9) && (over === false)) {
        $('#message').text('tie!')
        over = true
      }
      api.update(index, value, over)
        .then(ui.updateGameSuccess)
        .catch(ui.updateGameFailure)
    }
  } else {
    console.log('the move is invalid')
    console.log($(event.target).text())
    // console.log('clicked')
  }
}

const addHandlers = event => {
  $('.square').on('click', onGridClick)
  $('.square').on('click', checkForWinner)
  $('.square').on('click', checkForTie)
  $('#get-stats').on('click', onGetStats)
  $('#create-game').on('click', onCreateGame)
  $('#new-game').on('click', newGame)
}

module.exports = {
  addHandlers,
  checkForTie,
  checkForWinner,
  onGetStats,
  onGridClick
}
