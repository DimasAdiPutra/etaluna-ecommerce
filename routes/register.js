const express = require('express')
const router = express.Router()

/* Me-require validator dengan express-validator untuk validasi schema */
const registerValidation = require('../validation/register')

/* Me-require controller register */
const { getRegister, postRegister } = require('../controllers/register')

/* GET register page */
router.get('/', getRegister)

/* POST register -> menangani register user */
router.post('/', registerValidation, postRegister)

module.exports = router
