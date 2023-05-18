const { validationResult } = require('express-validator') // require validation result
const bcrypt = require('bcrypt') // require bcrypt untuk enkripsi password
const { findUserByEmail } = require('../utilities/user') // require fungsi utilities find user by email

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
	const errors = req.flash('errors')

	const falseInput = req.session.falseInput || {}

	req.session.falseInput = null

	res.render('auth/login', {
		title: 'Login Page',
		currentPage: req.currentPage,
		mode: req.mode,
		errors,
		falseInput,
	})
}

const postLogin = async (req, res, next) => {
	/**
	 * Validation schema
	 */
	const errors = [...validationResult(req).array()]

	const user = await findUserByEmail(req.body.email)

	if (user.length > 1) {
		errors.push({
			field: 'email',
			msg: 'Your email has been used!',
		})
		// return false
	}

	if (!user || user.length <= 0) {
		// res.send('Email is not registered!')
		errors.push({
			field: 'email',
			msg: 'Email is not registered!',
		})
		// return false
	}

	if (user.length >= 1) {
		const isPasswordCorrect = await bcrypt.compare(
			req.body.password,
			user[0].password
		)

		if (!isPasswordCorrect) {
			// res.send('Password is incorrect!')
			errors.push({
				field: 'email',
				msg: 'Password is incorrect!',
			})
			// return false
		}
	}

	console.log(errors)

	if (errors.length > 0) {
		req.flash('errors', errors)

		req.session.falseInput = req.body

		req.session.save(() => {
			res.redirect('/login')
		})

		return false
	}

	// req.session.user = user[0]

	// req.session.save(() => {
	// 	res.redirect('/')
	// })

	res.json(user)
}

module.exports = { getLogin, postLogin }
