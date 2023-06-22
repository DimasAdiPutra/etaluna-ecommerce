const verify = require('jsonwebtoken/verify')

const verifySessionToken = (session) => {
	// Verifikasi token
	return session
		? verify(session, process.env.TOKEN_SECRET, (err, decoded) =>
				err ? err : decoded
		  )
		: false
}

module.exports = { verifySessionToken }
