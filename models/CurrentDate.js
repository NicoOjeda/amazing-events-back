const mongoose = require('mongoose')

const schema = new mongoose.Schema({
        currentDate:{type: String, required: true},
})

const CurrentDate = mongoose.model('CurrentDate', schema)

module.exports = CurrentDate