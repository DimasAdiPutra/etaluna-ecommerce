const verify = require('jsonwebtoken/verify')

/**
 * Fungsi getHome digunakan sebagai controller untuk mengambil halaman home.
 * @param req - berfungsi untuk menerima request user.
 * req = {
 * 		mode: process.env.NODE_ENV,
 * 		currentPage: req.originalUrl.split('/')[1],
 * } - diambil dari middleware yang ada di app.js
 * @param res - berfungsi untuk mengirimkan respon yang akan diterima user.
 * res disini akan merender views home, dengan mengirimkan data object untuk digunakan di dalam views
 */
const getHome = (req, res, next) => {
	const success = req.flash('success')[0]

	const token = req.session.token || req.cookies.token || ''

	// Verifikasi token
	const user = verify(token, process.env.TOKEN_SECRET, (err, decoded) =>
		err ? err : decoded
	)

	res.render('home', {
		title: 'Home Page',
		currentPage: req.currentPage,
		mode: req.mode,
		success,
		user,
	})
}

module.exports = { getHome }
