require('dotenv').config()

const { validationResult } = require('express-validator') // require hasil validasi
const bcrypt = require('bcrypt') // require bcrypt untuk mengenkripsi password

const { addUser } = require('../utilities/user') // require fungsi utilities untuk menambahkan user

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

const postRegister = async (req, res, next) => {
	const validation = validationResult(req) // jika validasi gagal ini akan terisi pesan validasi

	if (!validation.isEmpty()) {
		req.flash('errors', validation)

		req.session.falseInput = req.body

		req.session.save(() => {
			res.redirect('/register')
		})

		return false
	}

	const errors = []
	const user = { ...req.body }
	const saltRounds = 12

	const hash = await bcrypt.hash(user.password, saltRounds) // enkripsi password
	user.password = hash
	const result = await addUser(user) // menambahkan user ke database

	if (!result.success) {
		if (result.code === 11000) {
			errors.push({ field: 'email', msg: 'Your email has been used.' })
		} else {
			errors.push({
				field: 'database',
				msg:
					process.env.NODE_ENV === 'development'
						? result.message
						: 'Something went wrong, please try again later',
			})
		}
	}

	if (errors.length > 0) {
		req.flash('errors', errors)

		req.session.falseInput = req.body

		req.session.save(() => {
			res.redirect('/register')
		})

		return false
	}

	req.flash('success', result.message) // membuat flash message success

	res.redirect('/login')
}

module.exports = { getRegister, postRegister }
