const express = require('express')
const router = express.Router()

const { getLogin } = require('../controllers/login')

router.get('/', getLogin)

module.exports = router