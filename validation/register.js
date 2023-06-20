const { checkSchema } = require('express-validator')

const registerValidation = checkSchema({
	firstName: {
		notEmpty: {
			errorMessage: 'First Name is required.',
		},
		trim: true,
		escape: true,
	},
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
		matches: {
			options: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
			errorMessage:
				'Password is too weak. It must be at least 8 characters long and include an uppercase letter, a lowercase letter and a number.',
		},
		trim: true,
		escape: true,
	},
})

module.exports = registerValidation
