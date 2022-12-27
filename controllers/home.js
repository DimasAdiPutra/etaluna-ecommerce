const getHome = (req, res, next) => {
	res.render('home', { title: 'Home Page', currentPage: req.currentPage })
}

module.exports = { getHome }
