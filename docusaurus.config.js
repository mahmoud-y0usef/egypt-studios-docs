module.exports = {
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
  themeConfig: {
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/easyops-cn/docusaurus-search-example/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/easyops-cn/docusaurus-search-example/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }
    ]
  ]
};
