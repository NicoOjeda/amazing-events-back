let router = require('express').Router()

let event = require('./event')
let current= require('./current')

router.use('/event', event)
router.use('/current', current)

module.exports = router;
