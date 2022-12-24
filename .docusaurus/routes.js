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
    component: ComponentCreator('/search', '148'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'f68'),
    routes: [
      {
        path: '/docs/category/script-1',
        component: ComponentCreator('/docs/category/script-1', '5e5'),
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
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/script 1/script 1',
        component: ComponentCreator('/docs/script 1/script 1', '801'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/script 2/script 2',
        component: ComponentCreator('/docs/script 2/script 2', '9bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/qbscripts',
    component: ComponentCreator('/qbscripts', '5fd'),
    routes: [
      {
        path: '/qbscripts/category/script-1',
        component: ComponentCreator('/qbscripts/category/script-1', '7e9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qbscripts/category/script-2',
        component: ComponentCreator('/qbscripts/category/script-2', 'b2f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qbscripts/intro',
        component: ComponentCreator('/qbscripts/intro', '359'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qbscripts/script 1/script 1',
        component: ComponentCreator('/qbscripts/script 1/script 1', 'a36'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qbscripts/script 2/script 2',
        component: ComponentCreator('/qbscripts/script 2/script 2', '98c'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/standalonescripts',
    component: ComponentCreator('/standalonescripts', '175'),
    routes: [
      {
        path: '/standalonescripts/category/script-1',
        component: ComponentCreator('/standalonescripts/category/script-1', '754'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/standalonescripts/category/script-2',
        component: ComponentCreator('/standalonescripts/category/script-2', 'dc2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/standalonescripts/intro',
        component: ComponentCreator('/standalonescripts/intro', '04d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/standalonescripts/script 1/script 1',
        component: ComponentCreator('/standalonescripts/script 1/script 1', '2a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/standalonescripts/script 2/script 2',
        component: ComponentCreator('/standalonescripts/script 2/script 2', 'd3c'),
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
