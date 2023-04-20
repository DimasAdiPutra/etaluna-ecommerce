const express = require('express')
const router = express.Router()

/* Me-require controller login */
const { getLogin } = require('../controllers/login')

/* GET login page */
router.get('/', getLogin)

module.exports = router
