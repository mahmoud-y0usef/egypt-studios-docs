// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'docs',
  tagline: `Welcome to Egypt Studio 
    The goal : programming new things that affect the community of the fivem or more, and other things`,
  url: 'https://egypt-studios-docs.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'egypt studios', // Usually your GitHub org/user name.
  projectName: 'egypt studios documintation', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'egypt studios',
        logo: {
          alt: 'egypt studios',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'docs',
          },
          {
            // type: 'doc',
            // docId: 'intro1',
            position: 'left',
            to:'/docs1',
            label: 'docs1',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/rules', label: 'Rules', position: 'left'},
          {
            href: 'https://egyptstudio.tebex.io/category/2031240',
            label: 'Shop Now',
            position: 'right',
          },
          // {
          //   type: 'localeDropdown',
          // },
        ],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'YMC28MTSX5S',
  
        // Public API key: it is safe to commit it
        apiKey: '758a102919548edbf821795be1f2ccdb',
  
        indexName: 'egypt studios',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Society',
            items: [
              {
                label: 'discord',
                href: 'https://discord.gg/Q6VpZTueKF',
              },
              {
                label: 'youtube',
                href: 'https://www.youtube.com/c/Konar1',
              },
            ],
          },
          {
            title: 'Donation',
            items: [
              {
                label: 'Paypal',
                href: 'https://www.paypal.com/paypalme/KonarEG',
              },
              {
                label: 'Ko-fi',
                href: 'https://ko-fi.com/konarplus/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 💗 egypt studios `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
