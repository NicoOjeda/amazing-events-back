const mongoose = require('mongoose')

const schema = new mongoose.Schema({
        image:{type: String, required: true}, 
        name:{type: String, required: true}, 
        date:{type: String, required: true},
        description:{type: String, required: true},
        category:{type: String, required: true},
        place:{type: String, required: true}, 
        capacity:{type: Number, required: true}, 
        estimate:{type: Number, required: true},
        price:{type: Number, required: true}
})

const Estimate = mongoose.model('events', schema)

module.exports = Estimate