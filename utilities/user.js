const User = require('../models/User')

// Mengambil user berdasarkan email
const findUserByEmail = async (email) => {
	const user = await User.find({ email: email })

	if (user.length === 0) return 'user not found' // cek apabila user tidak di temukan
	if (user.length > 1) return 'duplicate email' // cek jika email ada lebih dari 1

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
