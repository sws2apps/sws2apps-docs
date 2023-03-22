// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Congregation Program for Everyone - Documentation',
	url: 'https://sws2apps.github.io',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'sws2apps', // Usually your GitHub org/user name.
	projectName: 'sws2apps-docs', // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'mg'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/sws2apps/sws2apps-docs/tree/main',
					editLocalizedFiles: true,
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/sws2apps/sws2apps-docs/tree/main',
					editLocalizedFiles: true,
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'Congregation Program for Everyone',
				logo: {
					alt: 'sws2apps logo',
					src: 'img/sws2apps.png',
				},
				items: [
					{
						position: 'left',
						label: 'Tutorials',
						to: 'docs/category/frequently-asked-questions',
					},
					{ to: '/blog', label: 'Blog', position: 'left' },
					{
						type: 'localeDropdown',
						position: 'right',
					},
					{
						href: 'https://github.com/sws2apps/sws2apps-docs',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'FAQ',
								to: 'docs/category/frequently-asked-questions',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Telegram',
								href: 'https://t.me/+H0fr4uoDghA4MDg8',
							},
							{
								label: 'GitHub Discussions',
								href: 'https://github.com/sws2apps/sws2apps-docs/discussions',
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
								label: 'Privacy Policy',
								to: '/privacy',
							},
							{
								label: 'Terms of Use',
								to: '/terms',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/sws2apps/sws2apps-docs',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Congregation Program for Everyone. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
