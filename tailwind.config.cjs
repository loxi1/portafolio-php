/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				principal: {
					100: '#999ab8',
					200: '#8282a7',
					300: '#6a6a96',
					400: '#565588',
					500: '#45457c',
					600: '#363671',
					700: '#252566',
					800: '#15155b',
					900: '#060650',
					DEFAULT: '#00004c'
				},
				'verde': {
					100: '#cbc7de',
					200: '#c3bed8',
					300: '#bbb5d3',
					400: '#b0aacc',
					500: '#a6a0c6',
					600: '#9992bd',
					700: '#9188b8',
					800: '#887eb2',
					900: '#7e73ab',
					DEFAULT: '#796ea8'
				},
				'principal-dark': '#796ea8',
				'naranja': '#F8AF3E'
			},
			fontSize: {
				sm: '0.8rem',
				base: '1rem',
				xl: '1.25rem',
				'2xl': '1.563rem',
				'3xl': '1.953rem',
				'4xl': '2.441rem',
				'5xl': '3.052rem',
			},
			backgroundImage: {
				'bg-proyectos': "url(/imagenes/slider/slide-bg-02.jpg)"
			},
			animationDelay: {
				275: '275ms',
				5000: '5s',
			},
			animationDuration: {
				2000: '2s',
				'long': '10s',
				'very-long': '20s',
			},
		},
		listStyleType: {
			none: 'none',
			disc: 'disc',
			decimal: 'decimal',
			square: 'square',
			roman: 'upper-roman',
		}
	},
	plugins: [
		require('tailwindcss-animated')
	],
}