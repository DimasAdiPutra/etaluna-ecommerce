const User = require('../models/User')

const addUser = async (data) => {
	new User(data)
		.save()
		.then((data) => console.log(data))
		.catch((err) => console.log(err))
}

module.exports = { addUser }
