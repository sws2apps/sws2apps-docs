import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
	title: 'Scheduling Workbox System',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://sws2apps.com',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'facebook', // Usually your GitHub org/user name.
	projectName: 'docusaurus', // Usually your repo name.

	onBrokenLinks: 'throw',
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
					editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				blog: false,
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: 'img/docusaurus-social-card.jpg',
		navbar: {
			title: 'Scheduling Workbox System',
			logo: {
				alt: 'logo',
				src: 'img/sws2apps.svg',
			},
			items: [
				{
					href: 'https://github.com/sws2apps',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Community',
					items: [
						{
							label: 'Organized – Telegram Channel',
							href: 'https://t.me/+SDZy2YoAzOg5MGI0',
						},
						{
							label: 'Organized – GitHub Discussions',
							href: 'https://github.com/sws2apps/organized-app/discussions',
						},
					],
				},
				{
					title: 'More',
					items: [
						{
							label: 'GitHub',
							href: 'https://github.com/sws2apps',
						},
						{
							label: 'Privacy Policy',
							to: '/privacy',
						},
						{
							label: 'Terms of Use',
							to: '/terms',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Scheduling Workbox System`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
