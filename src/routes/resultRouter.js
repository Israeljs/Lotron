const express = require('express')
const resultController = require('../controllers/resultController')

const router = express.Router()

router.get('/:id', resultController.getResults)
router.get('/', resultController.getResults)

module.exports = router
