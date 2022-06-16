// tailwind.config.cjs
const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		// Example content paths...
		'./public/**/*.html',
		'./src/**/*.{js,ts,scss,html,svelte,css}'
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			blue: '#1fb6ff',
			purple: '#7e5bef',
			pink: '#ff49db',
			orange: '#ff7849',
			green: '#13ce66',
			yellow: '#ffc82c',
			emerald: colors.emerald,
			amber: colors.amber,
			violet: colors.violet,
			midnight: '#121063',
			'regal-blue': '#243c5a',
			metal: '#565584',
			tahiti: '#3ab7bf',
			silver: '#ecebff',
			bermuda: '#78dcca',
			gray: '#8492a6',
			'gray-dark': '#273444',
			'gray-light': '#d3dce6',
			'bubble-gum': '#ff77e9'
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif']
		},
		extend: {
			spacing: {
				'8xl': '96rem',
				'9xl': '128rem'
			},
			borderRadius: {
				'4xl': '2rem'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
