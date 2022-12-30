require('dotenv').config()

const createError = require('http-errors')
const express = require('express')
const expressEjsLayouts = require('express-ejs-layouts')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

const homeRouter = require('./routes/home')
const loginRouter = require('./routes/login')
const registerRouter = require('./routes/register')
const authRouter = require('./routes/auth')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(expressEjsLayouts)
app.set('layout', 'layouts/index')
app.set('layout extractScripts', true)
app.set('layout extractStyles', true)

app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', (req, res, next) => {
	req.currentPage = req.originalUrl.split('/')[1]

	next()
})

app.use('/', homeRouter)
app.use('/login', loginRouter)
app.use('/register', registerRouter)
app.use('/auth', authRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.error = err

	// render the error page
	res.status(err.status || 500)
	res.render('error', {
		title: `${err.status} ${err.message}`,
		env: req.app.get('env'),
		currentPage: req.currentPage
	})
})

module.exports = app
