let router = require('express').Router()
let {read} = require('../controllers/current')

router.get('/', read)

module.exports = router