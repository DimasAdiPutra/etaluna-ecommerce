const getHome = (req, res, next) => {
	res.render('home', { title: 'Home Page', currentPage: req.currentPage, form: false, mode: req.mode })
}

module.exports = { getHome }
