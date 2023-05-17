// require validation result
const { validationResult } = require('express-validator')
// require fungsi utilities find user by email
const { findUserByEmail } = require('../utilities/user')

/**
 * Fungsi getLogin digunakan sebagai controller untuk mengambil halaman login.
 * @param req - berfungsi untuk menerima request user.
 * req = {
 * 		mode: process.env.NODE_ENV,
 * 		currentPage: req.originalUrl.split('/')[1],
 * } - diambil dari middleware yang ada di app.js
 * @param res - berfungsi untuk mengirimkan respon yang akan diterima user.
 * res disini akan merender views login yang ada di dalam folder auth, dengan mengirimkan data object untuk digunakan di dalam views
 */
const getLogin = (req, res, next) => {
	res.render('auth/login', {
		title: 'Login Page',
		currentPage: req.currentPage,
		mode: req.mode,
	})
}

const postLogin = async (req, res, next) => {
	/**
	 * Validation schema
	 */
	const errors = validationResult(req)

	if (!errors.isEmpty()) {
		req.flash('errors', errors.array())

		req.session.falseInput = req.body

		req.session.save(() => {
			res.redirect('/login')
		})

		return false
	}

	const user = await findUserByEmail(req.body.email)

	res.json(user)
}

module.exports = { getLogin, postLogin }
