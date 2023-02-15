/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./views/**/*.{html,js,ejs}',
		'./public/javascripts/*.js',
		'./src/**/*.{js,css}',
	],
	theme: {
		extend: {
			height: {
				'full-screen': 'calc(100vh - 80px)',
			},
			keyframes: {
				top: {
					'0%': { top: '0', transform: 'rotate(0)' },
					'50%': { top: '8px', transform: 'rotate(0)' },
					'100%': { top: '8px', transform: 'rotate(135deg)' },
				},
				'top-2': {
					'0%': { top: '8px', transform: 'rotate(135deg)' },
					'50%': { top: '8px', transform: 'rotate(0deg)' },
					'100%': { top: '0', transform: 'rotate(0deg)' },
				},
				bottom: {
					'0%': { bottom: '0', transform: 'rotate(0)' },
					'50%': { bottom: '8px', transform: 'rotate(0)' },
					'100%': { bottom: '8px', transform: 'rotate(45deg)' },
				},
				'bottom-2': {
					'0%': { bottom: '8px', transform: 'rotate(45deg)' },
					'50%': { bottom: '8px', transform: 'rotate(0)' },
					'100%': { bottom: '0', transform: 'rotate(0)' },
				},
				'zoom-out': {
					'50%': { transform: 'scale(0)' },
					'100%': { transform: 'scale(0)' },
				},
				'zoom-in': {
					'0%': { transform: 'scale(0)' },
					'50%': { transform: 'scale(0)' },
					'100%': { transform: 'scale(1)' },
				},
			},
			animation: {
				top: 'ease .7s top forwards',
				'top-2': 'ease .7s top-2 forwards',
				'zoom-out': 'ease .7s zoom-out forwards',
				'zoom-in': 'ease .7s zoom-in forwards',
				bottom: 'ease .7s bottom forwards',
				'bottom-2': 'ease .7s bottom-2 forwards',
			},
			screens: {
				xs: { min: '375px' },
			},
		},
		colors: {
			primary: '#37718E',
			secondary: '#254E70',
			tertiary: '#EF767A',
			other: '#EEB868',
			white: '#FCFFFD',
			black: '#1B1B1B',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1.25rem',
				md: '2.5rem',
				xl: '3.75rem',
				'2xl': '5rem',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
