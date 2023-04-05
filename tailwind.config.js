/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			screens: {
				phone: "390px",
				tablet: "700px",
				laptop: "1024px",
				desktop: "1920px",
			},
			fontFamily: {
				"primary-light": ["Light", "sans-serif"],
				"primary-reguar": ["Regular", "sans-serif"],
				"primary-medium": ["Medium", "sans-serif"],
				"primary-semi-bold": ["SemiBold", "sans-serif"],
				"primary-bold": ["Bold", "sans-serif"],
				"primary-extra-bold": ["ExtraBold", "sans-serif"],
				"title-bold": ["LogoBold", "sans-serif"],
			},
			backgroundImage: {
				main: "url('../public/images/MainBg.jpg')",
				logo: "url('../public/images/LogoMegaBlack.png')",
				last: "url('../public/images/LastBg.jpg')",
			},
			height: {
				"cut-screen": "calc(100vh - 72px)",
			},
		},
	},
	plugins: [],
};
