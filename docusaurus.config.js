// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Engineer to Leader',
  tagline: 'Transform from Individual Contributor to Engineering Leader',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://aharita.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/engineer-to-leader/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aharita', // Usually your GitHub org/user name.
  projectName: 'engineer-to-leader', // Usually your repo name.

  onBrokenLinks: 'throw',

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Disable edit page links
          editUrl: undefined,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Engineer to Leader',
        logo: {
          alt: 'Engineer to Leader Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'seniorSidebar',
            position: 'left',
            label: 'Senior → Manager',
          },
          {
            type: 'docSidebar',
            sidebarId: 'directorSidebar',
            position: 'left',
            label: 'Manager → Director',
          },
          {
            type: 'docSidebar',
            sidebarId: 'juniorSidebar',
            position: 'left',
            label: 'Junior → Senior',
          },
          {
            type: 'docSidebar',
            sidebarId: 'staffSidebar',
            position: 'left',
            label: 'Senior → Staff',
          },
          {
            href: 'https://github.com/aharita/engineer-to-leader',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Senior → Manager',
            items: [
              {
                label: 'Module 1: The Rewire',
                to: '/docs/senior-to-manager/module-1',
              },
            ],
          },
          {
            title: 'Manager → Director',
            items: [
              {
                label: 'Module 1: Meta-Management',
                to: '/docs/manager-to-director/module-1',
              },
            ],
          },
          {
            title: 'Junior → Senior',
            items: [
              {
                label: 'Module 1: The Ascent',
                to: '/docs/junior-to-senior/module-1',
              },
            ],
          },
          {
            title: 'Senior → Staff',
            items: [
              {
                label: 'Module 1: The Scope Shift',
                to: '/docs/senior-to-staff/module-1',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/aharita/engineer-to-leader',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Engineer to Leader. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
