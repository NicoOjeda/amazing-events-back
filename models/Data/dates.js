let current = {"currentDate":"2022-01-01"}


require('dotenv').config()
require('../../config/database')
const CurrentDate = require('../CurrentDate')

CurrentDate.create({
    currentDate: current.currentDate,
    })
