import type { Metadata } from 'next';

const title = 'Okafor James | Software Developer';
const description =
	'A software developer, with 4 years of professional exprience, dedicated to creating interactive, accessible, and responsive websites.';
const portfolio = 'https://www.jokafor.dev.vercel.app';

export const metadata: Metadata = {
	title,
	description,
	keywords: ['Software developer', 'Frontend developer'],
	authors: [
		{ name: 'OKafor James' },
		{ name: 'Okafor James', url: portfolio },
	],
	creator: 'Okafor James',
	icons: {
		other: [
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				url: '',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				url: '',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				url: '',
			},
		],
	},
	openGraph: {
		title,
		description,
		url: portfolio,
		siteName: 'James Portfolio',
		images: [
			// {
			// 	url: 'https://nextjs.org/og.png', // Must be an absolute URL
			// 	width: 800,
			// 	height: 600,
			// },
			// {
			// 	url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
			// 	width: 1800,
			// 	height: 1600,
			// 	alt: 'My custom alt',
			// },
		],
		locale: 'en_US',
		type: 'website',
	},
	manifest: '/site.webmanifest',
};
