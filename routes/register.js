const express = require('express')
const router = express.Router()

const { getRegister } = require('../controllers/register')

router.get('/', getRegister)

module.exports = router