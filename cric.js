const express = require('express')
const router = express.Router()

const CricController = require('../Controllers/CricController')

router.get('/cric',CricController.getCric)

module.exports = router