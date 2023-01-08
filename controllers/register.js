const getRegister = (req, res, next) => {
  res.render('auth/register', { title: 'Register Page', currentPage: req.currentPage, form: true })
}

module.exports = { getRegister }