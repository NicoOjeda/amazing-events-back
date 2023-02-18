let router = require('express').Router()
let {read} = require('../controllers/event')

router.get('/', read)

module.exports = router