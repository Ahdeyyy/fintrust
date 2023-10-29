/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	daisyui: {
		themes: [
			{
				mytheme: {

					"primary": "#5C2684",

					"secondary": "#828DF8",

					"accent": "#F471B5",

					"neutral": "#333333",

					"base-100": "#FFFFFF",

					"info": "#0CA6E9",

					"success": "#2BD4BD",

					"warning": "#F4C152",

					"error": "#FB6F84",
				},
			},
		],
	},

	plugins: [require("daisyui")],
};

module.exports = config;
