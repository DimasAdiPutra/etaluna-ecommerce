// require images
require('./images/errors/back-home.svg')

// require css
require('./styles/tailwind.css')

//* require js
/**
 * @import feather-icons
 */
const feather = require('feather-icons')

// Menjalankan feather icons
feather.replace({
	class: 'icons',
	// color: '#1B1B1B',
	// width: '16px',
})

require('./javascripts/nav')
require('./javascripts/dialog')
// require('./javascripts/form')
