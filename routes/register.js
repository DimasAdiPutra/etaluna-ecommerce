const express = require('express')
const router = express.Router()

/* Me-require controller register */
const { getRegister } = require('../controllers/register')

/* GET register page */
router.get('/', getRegister)

module.exports = router
