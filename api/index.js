const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI, { userNewUrlParser: true, useUnifiedTopology: true })

app.get('*', (req, res) => {
    res.send('prueba mongoAtlas')
})
module.exports = app