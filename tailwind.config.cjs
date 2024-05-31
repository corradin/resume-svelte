/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					50: '#E0F5FF',
					100: '#C2EBFF',
					200: '#80D4FF',
					300: '#42C0FF',
					400: '#05ACFF',
					500: '#0082C3',
					600: '#00699E',
					700: '#004E75',
					800: '#00334D',
					900: '#001B29',
					950: '#000E14'
				},
				secondary: {
					50: '#FFFDEB',
					100: '#FFFBD6',
					200: '#FFF6A8',
					300: '#FFF280',
					400: '#FFEE52',
					500: '#FFE928',
					600: '#EBD300',
					700: '#B3A100',
					800: '#756A00',
					900: '#3D3700',
					950: '#1F1C00'
				}
			},
			fontFamily: [
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Roboto',
				'Oxygen',
				'Ubuntu',
				'Cantarell',
				'Open Sans',
				'Helvetica Neue',
				'sans-serif'
			],
			screens: {
				print: { raw: 'print' }
			}
		}
	},

	plugins: []
};

module.exports = config;
