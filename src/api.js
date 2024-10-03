const express = require('express')

const app = express()

const resultRouter = require('./routes/resultRouter')
const gameRouter = require('./routes/gameRouter')

app.use(express.json());

app.use('/result/', resultRouter)
app.use('/game/', gameRouter)

module.exports = app
