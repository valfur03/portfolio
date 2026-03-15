// @ts-check

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [react()],

	build: {
		inlineStylesheets: "always",
	},

	fonts: [
		{
			provider: fontProviders.local(),
			name: "Inter",
			cssVariable: "--font-inter",
			display: "optional",
			options: {
				variants: [
					// {
					// 	src: ["./src/assets/fonts/Inter-ExtraLight.woff2"],
					// 	weight: "200",
					// 	style: "normal",
					// },
					// {
					// 	src: ["./src/assets/fonts/Inter-ExtraLightItalic.woff2"],
					// 	weight: "200",
					// 	style: "italic",
					// },
					// {
					// 	src: ["./src/assets/fonts/Inter-Light.woff2"],
					// 	weight: "300",
					// 	style: "normal",
					// },
					// {
					// 	src: ["./src/assets/fonts/Inter-LightItalic.woff2"],
					// 	weight: "300",
					// 	style: "italic",
					// },
					{
						src: ["./src/assets/fonts/Inter-Regular.woff2"],
						weight: "400",
						style: "normal",
					},
					// {
					// 	src: ["./src/assets/fonts/Inter-Italic.woff2"],
					// 	weight: "400",
					// 	style: "italic",
					// },
					// {
					// 	src: ["./src/assets/fonts/Inter-Medium.woff2"],
					// 	weight: "500",
					// 	style: "normal",
					// },
					// {
					// 	src: ["./src/assets/fonts/Inter-MediumItalic.woff2"],
					// 	weight: "500",
					// 	style: "italic",
					// },
					// {
					// 	src: ["./src/assets/fonts/Inter-SemiBold.woff2"],
					// 	weight: "600",
					// 	style: "normal",
					// },
					// {
					// 	src: ["./src/assets/fonts/Inter-SemiBoldItalic.woff2"],
					// 	weight: "600",
					// 	style: "italic",
					// },
					// {
					// 	src: ["./src/assets/fonts/Inter-Bold.woff2"],
					// 	weight: "700",
					// 	style: "normal",
					// },
					// {
					// 	src: ["./src/assets/fonts/Inter-BoldItalic.woff2"],
					// 	weight: "700",
					// 	style: "italic",
					// },
				],
			},
		},
		{
			provider: fontProviders.local(),
			name: "Overpass",
			cssVariable: "--font-overpass",
			display: "optional",
			options: {
				variants: [
					// {
					// 	src: ["./src/assets/fonts/Overpass-ExtraLight.woff2"],
					// 	weight: "200",
					// 	style: "normal",
					// },
					// {
					// 	src: ["./src/assets/fonts/Overpass-ExtraLightItalic.woff2"],
					// 	weight: "200",
					// 	style: "italic",
					// },
					// {
					// 	src: ["./src/assets/fonts/Overpass-Light.woff2"],
					// 	weight: "300",
					// 	style: "normal",
					// },
					// {
					// 	src: ["./src/assets/fonts/Overpass-LightItalic.woff2"],
					// 	weight: "300",
					// 	style: "italic",
					// },
					{
						src: ["./src/assets/fonts/Overpass-Regular.woff2"],
						weight: "400",
						style: "normal",
					},
					// {
					// 	src: ["./src/assets/fonts/Overpass-Italic.woff2"],
					// 	weight: "400",
					// 	style: "italic",
					// },
					// {
					// 	src: ["./src/assets/fonts/Overpass-Medium.woff2"],
					// 	weight: "500",
					// 	style: "normal",
					// },
					// {
					// 	src: ["./src/assets/fonts/Overpass-MediumItalic.woff2"],
					// 	weight: "500",
					// 	style: "italic",
					// },
					// {
					// 	src: ["./src/assets/fonts/Overpass-SemiBold.woff2"],
					// 	weight: "600",
					// 	style: "normal",
					// },
					// {
					// 	src: ["./src/assets/fonts/Overpass-SemiBoldItalic.woff2"],
					// 	weight: "600",
					// 	style: "italic",
					// },
					// {
					// 	src: ["./src/assets/fonts/Overpass-Bold.woff2"],
					// 	weight: "700",
					// 	style: "normal",
					// },
					// {
					// 	src: ["./src/assets/fonts/Overpass-BoldItalic.woff2"],
					// 	weight: "700",
					// 	style: "italic",
					// },
				],
			},
		},
	],

	vite: {
		plugins: [tailwindcss()],
	},
});
