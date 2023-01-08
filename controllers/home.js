const getHome = (req, res, next) => {
	res.render('home', { title: 'Home Page', currentPage: req.currentPage, form: false })
}

module.exports = { getHome }
