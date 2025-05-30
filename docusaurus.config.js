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
  scripts: [{src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5578412566769378', defer: true, 'data-domain': 'https://egypt-studios-docs.vercel.app/' , crossorigin:'anonymous'} , {src:'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js' , integrity:'sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN' , crossorigin:'anonymous' , defer: true, 'data-domain': 'https://egypt-studios-docs.vercel.app/'}],
  plugins: [
    [
      require.resolve("docusaurus-plugin-search-local"),
      {
        indexDocs:true,
        indexBlog:true,
        indexPages:false,
        docsRouteBasePath:"/",
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
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      hideOnScroll: true,
      // title: 'egypt studios',
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
        
        {to: 'https://egypt-studio.com/category/blog/', label: 'Blog', position: 'left'},
        {to: '/rules', label: 'Rules', position: 'left'},
        {to: '/roadmap', label: 'fivem courses', position: 'left'},
       
        {
          href: 'https://egypt-studio.com/',
          label: 'New Website',
          position: 'right',
        },
        // {
        //   type: 'localeDropdown',
        // },
      ],
    },
    footer: {
      // style: 'dark',
      links: [
        {
          title: 'Society',
          items: [
            {
              label: 'discord',
              href: 'https://discord.gg/2Xhag8k8Pm',
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
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        googleAnalytics: {
          trackingID: 'UA-141789564-1',
          anonymizeIP: true,
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
