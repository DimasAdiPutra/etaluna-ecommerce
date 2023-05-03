const express = require('express')
const router = express.Router()

/* Me-require controller register */
const { getRegister, postRegister } = require('../controllers/register')

/* GET register page */
router.get('/', getRegister)

/* POST register -> menangani register user */
router.post('/', postRegister)

module.exports = router
