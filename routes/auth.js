const express = require('express')
const router = express.Router()

/**
 * Karena kita tidak memiliki views untuk /auth,
 * jadi jika ada user yang mengakses url tersebut
 * akan otomatis di redirect ke halaman login
 */
router.get('/', (req, res, next) => {
	res.redirect('/login')
})

module.exports = router
