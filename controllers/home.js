const getHome = (req, res, next) => {
	res.render('home', {
		title: 'Home Page',
		currentPage: req.currentPage,
		mode: req.mode,
	})
}

module.exports = { getHome }
