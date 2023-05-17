const { checkSchema } = require('express-validator')

const loginValidation = checkSchema({
	email: {
		notEmpty: {
			errorMessage: 'Email is required.',
		},
		isEmail: {
			errorMessage: 'Invalid email. Please enter a valid email.',
		},
		normalizeEmail: true,
		trim: true,
		escape: true,
	},
	password: {
		notEmpty: {
			errorMessage: 'Password is required.',
		},
		trim: true,
		escape: true,
	},
})

module.exports = loginValidation
