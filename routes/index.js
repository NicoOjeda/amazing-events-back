let router = require('express').Router()

let event = require('./event')

router.use('/event', event)

module.exports = router;
