require('dotenv').config()

// require mongoose yang akan digunakan untuk membuat koneksi ke database
const mongoose = require('mongoose')

/**
 *  Membuat fungsi untuk membuat koneksi ke database dengan asyncronous
 * @option useNewUrlParser: true
 * @option connectTimeoutMS: 10000 -> jika waktu yang dibutuhkan untuk terkoneksi ke database lebih dari 10 detik maka akan terjadi error
 * Jika terjadi error tangkap dengan catch
 */
const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			connectTimeoutMS: 10000,
			dbName:
				process.env.NODE_ENV === 'production'
					? process.env.DB_NAME
					: process.env.DB_TEST,
		})
		console.log('Database connected!')
	} catch (err) {
		console.log(
			process.env.NODE_ENV === 'production' ? 'Database connection failed' : err
		)
	}
}

module.exports = connectDB
