const getHome = (req, res, next) => {
	const fullUrl = req.protocol + '://' + req.get('host')

	res.render('home', { title: 'Home Page', url: { ...req.myUrl } })
}

module.exports = { getHome }
