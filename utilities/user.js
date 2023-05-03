const User = require('../models/User')

const addUser = async (data) => {
	data.admin = 0

	if (data.lastName === '') {
		data.lastName = '-'
	}

	new User(data)
		.save()
		.then((data) => console.log(data))
		.catch((err) => console.log(err))
}

module.exports = { addUser }
