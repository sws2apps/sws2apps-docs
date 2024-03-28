import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
	title: 'Organized | How to use guide',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://guide.organized-app.com',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'sws2apps', // Usually your GitHub org/user name.
	projectName: 'sws2apps-docs', // Usually your repo name.

	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/sws2apps/sws2apps-docs/tree/main/organized',
					editLocalizedFiles: true,
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/sws2apps/sws2apps-docs/tree/main/organized',
					editLocalizedFiles: true,
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: 'img/organized-og-image.jpg',
		navbar: {
			title: 'Organized | How to use guide',
			logo: {
				alt: 'Organized How to use guide',
				src: 'img/logo.svg',
			},
			items: [
				{
					type: 'docSidebar',
					sidebarId: 'tutorialSidebar',
					position: 'left',
					label: 'Guide',
				},
				{ to: '/blog', label: 'Blog', position: 'left' },
				{
					href: 'https://github.com/sws2apps/organized-app',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'How to use',
					items: [
						{

							label: 'Text guide',
							to: '/docs/intro',
						},
						{
							label: 'YouTube tutorials',
							href: 'https://www.youtube.com/@organized-app',
						},
					],
				},
				{
					title: 'Community',
					items: [
						{
							label: 'GitHub Discussions',
							href: 'https://github.com/sws2apps/organized-app/discussions',
						},
						{
							label: 'Telegram',
							href: 'https://t.me/+cSAJmkiVneQwNjQ8',
						},
					],
				},
				{
					title: 'More',
					items: [
						{
							label: 'Blog',
							to: '/blog',
						},
						{
							label: 'About Organized',
							href: 'https://about.organized-app.com',
						},
						{
							label: 'Privacy Policy',
							to: 'https://sws2apps.com/privacy',
						},
						{
							label: 'Terms of Use',
							to: 'https://sws2apps.com/terms',
						},
					],
				},
			],
			copyright: `© Organized ${new Date().getFullYear()}. Built by sws2apps team.`,

		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
