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

const createGameSuccess = responseData => {
  store.game = responseData.game
  onSuccess('you have started a game')
  $('.after-auth').show()
  $('.before-auth').hide()
}

const createGameFailure = responseData => {
  store.game = responseData.game
  onFailure('you have not started a game')
  // $('.after-auth').hide()
  // $('.before-auth').show()
}

const onGetStatsSuccess = data => {
  const gamesStarted = data.games
  const gamesCompleted = gamesStarted.filter(game => game.over)
  $('#message').text(`you have played ${gamesCompleted.length} games`)
}

const onGetStatsFailure = data => {
  $('#message').text('no.')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  onGetStatsSuccess,
  onGetStatsFailure
}
