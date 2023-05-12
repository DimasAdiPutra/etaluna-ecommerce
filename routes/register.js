const express = require('express')
const router = express.Router()

/* Me-require validator dengan express-validator untuk validasi schema */
const userSchemaValidation = require('../validation/user')

/* Me-require controller register */
const { getRegister, postRegister } = require('../controllers/register')

/* GET register page */
router.get('/', getRegister)

/* POST register -> menangani register user */
router.post('/', userSchemaValidation, postRegister)

module.exports = router
