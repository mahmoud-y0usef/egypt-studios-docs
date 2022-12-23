import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'ebf'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '716'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '12e'),
    exact: true
  },
  {
    path: '/rules',
    component: ComponentCreator('/rules', '6e1'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '5f4'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e51'),
    routes: [
      {
        path: '/docs/category/script-1',
        component: ComponentCreator('/docs/category/script-1', '5e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/script-1-1',
        component: ComponentCreator('/docs/category/script-1-1', '833'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/script-1-2',
        component: ComponentCreator('/docs/category/script-1-2', '02d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/script-2',
        component: ComponentCreator('/docs/category/script-2', 'd0f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/script-2-1',
        component: ComponentCreator('/docs/category/script-2-1', '77f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/script-2-2',
        component: ComponentCreator('/docs/category/script-2-2', '5e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/esx scripts/script 1/markdown-features',
        component: ComponentCreator('/docs/esx scripts/script 1/markdown-features', '0e7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/esx scripts/script 2/markdown-features',
        component: ComponentCreator('/docs/esx scripts/script 2/markdown-features', 'db1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/qb scripts/script 1/markdown-features',
        component: ComponentCreator('/docs/qb scripts/script 1/markdown-features', 'c7c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/qb scripts/script 2/markdown-features',
        component: ComponentCreator('/docs/qb scripts/script 2/markdown-features', '625'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/stand alone scripts/script 1/markdown-features',
        component: ComponentCreator('/docs/stand alone scripts/script 1/markdown-features', 'a57'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/stand alone scripts/script 2/markdown-features',
        component: ComponentCreator('/docs/stand alone scripts/script 2/markdown-features', '6d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '506'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
