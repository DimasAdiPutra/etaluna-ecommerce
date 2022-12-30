const express = require('express')
const router = express.Router()

const { getRegister } = require('../controllers/auth')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.redirect('/login')
})

module.exports = router
