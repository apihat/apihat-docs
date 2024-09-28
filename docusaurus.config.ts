import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'API Hat Docs',
  tagline: 'Next Generation API Management Platform',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.apihat.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'apihat', // Usually your GitHub org/user name.
  projectName: 'aphat-docs', // Usually your repo name.

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
          editUrl:
            'https://github.com/apihat/apihat-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',  
      disableSwitch: true,  
      respectPrefersColorScheme: false,  
    },
    navbar: {
      title: 'Documentation',
      logo: {
        alt: 'API Hat Logo',
        src: '/img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Products',
          items: [
            {
              label: 'API Observability',
              href: '#',
            },
            {
              label: 'API Governance',
              href: '#',
            },
          ],
        },
        {
          title: 'Solutions',
          items: [
            {
              label: 'Node.js',
              to: '#',
            },
            {
              label: 'Java',
              to: '#',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/apihat',
            },
            {
              label: 'LinkedIn',
              href: 'https://de.linkedin.com/company/apihat',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} API Hat, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
