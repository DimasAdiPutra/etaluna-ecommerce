const User = require('../models/User')

// Mengambil user berdasarkan email
const findUserByEmail = async (email) => {
	const user = await User.find({ email })

	return user
}

// Menambahkan data user baru
const addUser = async (data) => {
	new User(data)
		.save()
		.then((data) => console.log(data))
		.catch((err) => console.log(err))
}

module.exports = { findUserByEmail, addUser }
