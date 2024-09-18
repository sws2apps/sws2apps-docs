import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Organized | User guide',
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
          routeBasePath: '/',
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
          customCss: ['./src/css/custom.css'],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/organized-og-image.jpg',
    navbar: {
      title: 'Organized | User guide',
      logo: {
        alt: 'Organized User guide',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'blog',
          label: 'Blog',
          position: 'right',
        },
        {
          href: 'https://organized-app.com',
          label: 'Organized app',
          position: 'right',
        },
        {
          href: 'https://github.com/sws2apps/organized-app',
          label: 'GitHub Repo',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Other resources',
          items: [
            {
              label: 'YouTube tutorials',
              href: 'https://www.youtube.com/@organized-app',
            },
            {
              label: 'About Organized website',
              href: 'https://about.organized-app.com',
            },
            {
              label: 'GitHub repository',
              href: 'https://github.com/sws2apps/organized-app',
            },
          ],
        },
        {
          title: 'Discuss and contact',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/sws2apps/organized-app/discussions',
            },
            {
              label: 'Telegram channel',
              href: 'https://t.me/+SDZy2YoAzOg5MGI0',
            },
            {
              label: 'Email support',
              href: 'mailto:support@organized-app.com',
            },
          ],
        },
        {
          title: 'Other',
          items: [
            {
              label: 'Frequently Asked Questions',
              to: 'https://guide.organized-app.com/faq/',
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
      copyright: `© Organized ${new Date().getFullYear()}. Built by the sws2apps team`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: '7I542EDI67',
      apiKey: '042b68ab11fd1186181e28b23ffee534',
      indexName: 'guide-organized-app',
      contextualSearch: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
