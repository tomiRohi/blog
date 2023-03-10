import defaultImage from './assets/images/default.png';

const CONFIG = {
	name: 'Blog de ROHI Sommiers',

	origin: 'https://blog.rohisommiers.com',
	basePathname: '/',
	trailingSlash: false,

	title: 'Blog de ROHI Sommiers',
	description: 'Enterate de las novedades sobre cómo mejorar el sueño y la calidad de descanso en nuestro blog.',
	author: 'ROHI Sommiers',
	defaultImage: defaultImage,

	defaultTheme: 'light', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

	language: 'es',
	textDirection: 'ltr',

	dateFormatter: new Intl.DateTimeFormat('es', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		timeZone: 'UTC',
	}),

	googleAnalyticsId: "G-6Z6TF5KZBG", // or "G-XXXXXXXXXX",
	googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',

	blog: {
		disabled: false,
		postsPerPage: 4,

		post: {
			permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
			noindex: false,
			disabled: false,
		},

		list: {
			pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
			noindex: false,
			disabled: false,
		},

		category: {
			pathname: 'category', // set empty to change from /category/some-category to /some-category
			noindex: true,
			disabled: false,
		},

		tag: {
			pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
			noindex: true,
			disabled: false,
		},
	},
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;