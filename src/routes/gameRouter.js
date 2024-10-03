const express = require('express')
const gameController = require('../controllers/gameController')

const router = express.Router()

router.get('/:id', gameController.gameFilter)

module.exports = router
