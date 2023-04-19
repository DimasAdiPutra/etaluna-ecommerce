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
	res.render('auth/register', {
		title: 'Register Page',
		currentPage: req.currentPage,
		mode: req.mode,
	})
}

module.exports = { getRegister }
