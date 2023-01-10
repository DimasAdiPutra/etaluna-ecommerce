const getRegister = (req, res, next) => {
  res.render('auth/register', { title: 'Register Page', currentPage: req.currentPage, form: true, mode: req.mode })
}

module.exports = { getRegister }