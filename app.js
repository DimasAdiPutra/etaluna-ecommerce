/**
 * TODO::
 * ? Test session apakah hilang dalam 1 menit
 * ! Sekarang, saat user login dengan remember me, hanya akan membuat cookie dan tidak membuat session, dan jika tanpa remember me akan membuat session.
 */

// Menjalankan dotenv
require('dotenv').config()

// Me-require semua package yang digunakan
const createError = require('http-errors')
const express = require('express')
const expressEjsLayouts = require('express-ejs-layouts')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')
const compression = require('compression')

// me-require semua router yang digunakan
const homeRouter = require('./routes/home')
const loginRouter = require('./routes/login')
const registerRouter = require('./routes/register')

// inisialisasi aplikasi express js
const app = express()

// menggunakan comppresion untuk meng-kompres file
app.use(compression())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(expressEjsLayouts)
app.set('layout', 'layouts/index')
app.set('layout extractScripts', true)
app.set('layout extractStyles', true)

// Express js setup
app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Set Cookie, Session, dan Flash
app.use(cookieParser(process.env.SESSION_SECRET))
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: true,
		saveUninitialized: true,
		rolling: true, // Jika session masih di gunakan waktu expired akan di reset
		cookie: {
			secure: process.env.NODE_ENV === 'production',
			maxAge: 1000 * 60 * 60 * 24, // Session hilang setelah 1 hari
			httpOnly: true,
		},
		store: MongoStore.create({
			mongoUrl: process.env.MONGO_URI,
			collection: 'sessions',
			dbName:
				process.env.NODE_ENV === 'production'
					? process.env.DB_NAME
					: process.env.DB_TEST,
		}),
	})
)
app.use(flash())

// path untuk folder yang menyimpan file static
app.use(express.static(path.join(__dirname, 'public')))

// middleware untuk mengambil halaman saat ini dan mode env
app.use('/', (req, res, next) => {
	req.currentPage = req.originalUrl.split('/')[1]
	req.mode = process.env.NODE_ENV

	next()
})

// Penggunakan router
app.use('/', homeRouter)
app.use('/login', loginRouter)
app.use('/register', registerRouter)

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
		currentPage: req.currentPage,
		mode: req.mode,
	})
})

module.exports = app
