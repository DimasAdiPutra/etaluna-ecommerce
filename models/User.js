const mongoose = require('mongoose')
const connectDB = require('../configs/db')

// connect to database
connectDB()

// Mpngodb schema dengan mongoose yang berfunsi untuk membuat dokumen yang akan disimpan di database
const UserSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
		},
		email: {
			type: String,
			required: true,
			unique: [true, 'Your email is registered.'],
		},
		password: {
			type: String,
			required: true,
			validate: {
				validator: (value) =>
					/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value),
				message: () =>
					`Password is too weak. It must be at least 8 characters long and include an uppercase letter, a lowercase letter and a number.`,
			},
		},
		admin: {
			type: Boolean,
			required: true,
			default: 0,
		},
		phone: {
			type: String,
		},
		birth: {
			type: Number,
		},
		profile: {
			type: String,
		},
		address: {
			street: {
				type: String,
				trim: true,
			},
			homeNumber: {
				type: String,
				trim: true,
			},
			city: {
				type: String,
				trim: true,
			},
			subdistrict: {
				type: String,
				trim: true,
			},
			state: {
				type: String,
				trim: true,
			},
			zip: {
				type: String,
				trim: true,
			},
		},
	},
	{
		timestamps: true, // menambahkan field createdAt dan updatedAt
	}
)

// buat model user dengan userSchema yang baru kita buat, dan export supaya bisa digunakan di file lain
module.exports = mongoose.model('User', UserSchema)
