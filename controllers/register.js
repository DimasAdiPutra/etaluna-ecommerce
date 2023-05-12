const { validationResult } = require('express-validator')
const { addUser } = require('../utilities/user')

/**
 * Fungsi getRegister digunakan sebagai controller untuk mengambil halaman register.
 * @param req - berfungsi untuk menerima request user.
 * req = {
 * 		mode: process.env.NODE_ENV,
 * 		currentPage: req.originalUrl.split('/')[1],
 * } - diambil dari middleware yang ada di app.js
 * @param res - berfungsi untuk mengirimkan respon yang akan diterima user.
 * res disini akan merender views register yang ada di dalam folder auth, dengan mengirimkan data object untuk digunakan di dalam views
 */
const getRegister = (req, res, next) => {
	const errors = req.flash('errors')

	const falseInput = req.session.falseInput || {}

	req.session.falseInput = null

	res.render('auth/register', {
		title: 'Register Page',
		currentPage: req.currentPage,
		mode: req.mode,
		errors,
		falseInput,
	})
}

const postRegister = (req, res, next) => {
	/**
	 * Validation schema
	 */
	const errors = validationResult(req)

	if (!errors.isEmpty()) {
		req.flash('errors', errors.array())

		req.session.falseInput = req.body

		req.session.save(() => {
			res.redirect('/register')
		})

		return false
	}

	addUser(req.body)

	res.json(req.body)
}

module.exports = { getRegister, postRegister }
