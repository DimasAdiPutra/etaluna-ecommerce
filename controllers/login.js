require('dotenv').config()

const { validationResult } = require('express-validator') // require validation result
const bcrypt = require('bcrypt') // require bcrypt untuk enkripsi password
const jwt = require('jsonwebtoken') // require jsonwebtoken untuk mengirimkan token ke user
const { findUserByEmail } = require('../utilities/user') // require fungsi utilities find user by email
const { verifySessionToken } = require('../utilities/common') // require fungsi untuk mengambil session login jika sudah login

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
	const errors = req.flash('errors') // mengambil pesan errors di flash

	const falseInput = req.session.falseInput || {} // mengambil data false input di session

	req.session.falseInput = null

	const success = req.flash('success')[0] // mengambil pesan success

	const token = req.session.token || req.cookies.token || ''

	const user = verifySessionToken(token)

	res.render('auth/login', {
		title: 'Login Page',
		currentPage: req.currentPage,
		mode: req.mode,
		errors, // mengirim error ke views
		falseInput, // mengirim data false input ke views
		success, // mengirim pesan success ke views
		user,
	})
}

const postLogin = async (req, res, next) => {
	/**
	 * Validation schema
	 */
	const validation = validationResult(req)

	if (!validation.isEmpty()) {
		req.flash('errors', validation)

		req.session.falseInput = req.body

		req.session.save(() => {
			res.redirect('/register')
		})

		return false
	}

	const errors = []
	const user = await findUserByEmail(req.body.email)

	if (user.length > 1) {
		errors.push({
			field: 'email',
			msg: 'Your email is used on two different accounts. Please use your email on one account only.',
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

	if (errors.length > 0) {
		req.flash('errors', errors)

		req.session.falseInput = req.body

		req.session.save(() => {
			res.redirect('/login')
		})

		return false
	}

	req.flash('success', 'Login-Berhasil!')

	const token = jwt.sign(
		{
			id: user[0]._id,
			fullName: user[0].fullName,
			firstName: user[0].firstName,
			lastName: user[0].lastName,
			email: user[0].email,
			admin: user[0].admin,
		},
		process.env.TOKEN_SECRET
	)

	// Jika user memilih "remember me", simpan token di cookie
	if (req.body.remember) {
		res.cookie('token', token, {
			maxAge: 1000 * 60 * 60 * 24 * 3,
			httpOnly: true,
			rolling: true,
		}) // Expire setelah 3 hari
	} else {
		req.session.token = token
	}

	req.session.save(() => {
		res.redirect('/')
	})
}

module.exports = { getLogin, postLogin }
