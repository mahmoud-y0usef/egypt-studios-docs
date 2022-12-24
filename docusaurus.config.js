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
  plugins: [
    [
      require.resolve("docusaurus-plugin-search-local"),
      {
        indexDocs:true,
        indexBlog:true,
        indexPages:false,
        docsRouteBasePath:"/",
        blogRouteBasePath:"/blog",
        hashed:false,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'qbscripts',
        path: 'qbscripts',
        routeBasePath: 'qbscripts',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'standalonescripts',
        path: 'standalonescripts',
        routeBasePath: 'standalonescripts',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
],
  themeConfig: {
    metadata: [{property: 'og:url', content: 'https://egypt-studios-docs.vercel.app/'}],
    metadata: [{property: 'og:type', content: 'website'}],
    metadata: [{property: 'og:site_name', content: 'egypt studios'}],
    metadata: [{property: 'og:title', content: 'egypt studios development'}],
    metadata: [{property: 'og:description', content: 'programming new things that affect the community of the fivem or more'}],
    metadata: [{property: 'og:image', content: 'https://egypt-studios-docs.vercel.app/img/egypt-studios.png'}],
    navbar: {
      hideOnScroll: true,
      title: 'egypt studios',
      logo: {
        alt: 'egypt studios',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'dropdown',
          label: 'FiveM',
          position: 'left',
          items: [
            {
              to: '/esxscripts/intro',    
              label: 'esx scripts',
              // position: 'left',
              activeBaseRegex: `/esxscripts/`,
            },
            {
              to: '/qbscripts/intro', 
              label: 'qb scripts',
              // position: 'left',
              activeBaseRegex: `/qbscripts/`,
            },
            {
              to: '/standalonescripts/intro',  // ./docs-system/Intro.md
              label: 'standalone scripts',
              // position: 'left',
              activeBaseRegex: `/standalonescripts/`,
            },
          ],
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
          routeBasePath: 'esxscripts',
          path: 'esxscripts',
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
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
  // themes: [
  //   [
  //     "@easyops-cn/docusaurus-search-local",
  //     {
  //       hashed: true,
  //       language: ["en"],
  //       highlightSearchTermsOnTargetPage: true,
  //       explicitSearchResultPath: true,
  //     }
  //   ]
  // ]
};
