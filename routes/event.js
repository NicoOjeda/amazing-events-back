let router = require('express').Router()
let {read} = require('../controllers/event')

router.route('/', read)

module.exports = router