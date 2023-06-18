const User = require('../models/User')

// Mengambil user berdasarkan email
const findUserByEmail = async (email) => {
	const user = await User.find({ email })

	return user
}

// Menambahkan data user baru
const addUser = async (data) => {
	try {
		await new User(data).save()
		return { success: true, message: 'Registrasi-Berhasil!', code: 0 }
	} catch (error) {
		return { success: false, message: error.message, code: error.code }
	}
}

module.exports = { findUserByEmail, addUser }
