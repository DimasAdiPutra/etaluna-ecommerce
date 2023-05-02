const mongoose = require('mongoose')
const connectDB = require('../configs/db')

// connect to database
connectDB()

// Mpngodb schema dengan mongoose yang berfunsi untuk membuat dokumen yang akan disimpan di database
const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		phone: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true, // menambahkan field createdAt dan updatedAt
	}
)

// buat model user dengan userSchema yang baru kita buat, dan export supaya bisa digunakan di file lain
module.exports = mongoose.model('User', UserSchema)
