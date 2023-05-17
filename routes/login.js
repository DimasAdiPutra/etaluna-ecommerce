const express = require('express')
const router = express.Router()

/* Me-require validator dengan express-validator untuk validasi schema */
const loginValidation = require('../validation/login')

/* Me-require controller login */
const { getLogin, postLogin } = require('../controllers/login')

/* GET login page */
router.get('/', getLogin)

/* POST login */
router.post('/', loginValidation, postLogin)

module.exports = router
