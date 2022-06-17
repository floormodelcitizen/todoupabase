// tailwind.config.cjs
// const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		// Example content paths...
		'./public/**/*.html',
		'./src/**/*.{js,ts,scss,html,svelte,css}'
	],
	theme: {
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
