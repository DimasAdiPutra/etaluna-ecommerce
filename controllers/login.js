const getLogin = (req, res, next) => {
	res.render('auth/login', {
		title: 'Login Page',
		currentPage: req.currentPage,
		mode: req.mode,
	})
}

module.exports = { getLogin }
