const express = require('express')
const router = express.Router()

/* jika membuka halaman utama auth, maka alihkan ke halaman login */
router.get('/', (req, res, next) => {
  res.redirect('/login')
})

module.exports = router
