import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '37c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '1db'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '2b6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'd49'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '7b2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '97f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '78c'),
    exact: true
  },
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
    path: '/esxscripts',
    component: ComponentCreator('/esxscripts', 'e8a'),
    routes: [
      {
        path: '/esxscripts/category/script-1',
        component: ComponentCreator('/esxscripts/category/script-1', 'c5b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/esxscripts/category/script-2',
        component: ComponentCreator('/esxscripts/category/script-2', 'ea7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/esxscripts/intro',
        component: ComponentCreator('/esxscripts/intro', 'c77'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/esxscripts/script 1/script 1',
        component: ComponentCreator('/esxscripts/script 1/script 1', 'd70'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/esxscripts/script 2/script 2',
        component: ComponentCreator('/esxscripts/script 2/script 2', '8f5'),
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
