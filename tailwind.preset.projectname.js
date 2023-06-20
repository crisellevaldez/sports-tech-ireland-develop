const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
	theme: {
		fontFamily: {
			'heading': ['bebas-neue-pro', ...defaultTheme.fontFamily.sans],
			'sans': ['nuito', ...defaultTheme.fontFamily.sans],
		},
		extend: {
			colors: {
				purple: '#3E3A86',
				red: '#C62831',
				green: '#62B068',
				dark: '#222222',
				offset: '#EDEDED',

			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms')
	]
}
