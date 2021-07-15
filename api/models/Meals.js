const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Meals = mongoose.model('Meal', new Schema({//crear modelo (nombre,define Schema)
    name: String,
    desc: String,
}))

module.exports = Meals