const getLogin = (req, res, next) => {
  res.render('auth/login', { title: 'Login Page', currentPage: req.currentPage })
}

module.exports = { getLogin }