'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events')
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  authEvents.addHandlers()
})
