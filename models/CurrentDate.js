const mongoose = require('mongoose')

const schema = new mongoose.Schema({
        date:{type: Date, required: true},
})

const CurrentDate = mongoose.model('CurrentDate', schema)

module.exports = CurrentDate