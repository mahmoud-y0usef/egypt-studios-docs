import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '6f8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '868'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'c64'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '5eb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '8a5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '4df'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'efe'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '104'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '4e8'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '13e'),
    exact: true
  },
  {
    path: '/form',
    component: ComponentCreator('/form', 'fc1'),
    exact: true
  },
  {
    path: '/privacy',
    component: ComponentCreator('/privacy', 'ba7'),
    exact: true
  },
  {
    path: '/roadmap',
    component: ComponentCreator('/roadmap', 'c5a'),
    exact: true
  },
  {
    path: '/rules',
    component: ComponentCreator('/rules', '02c'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '523'),
    exact: true
  },
  {
    path: '/esxscripts',
    component: ComponentCreator('/esxscripts', 'e0f'),
    routes: [
      {
        path: '/esxscripts/category/esxpaidkonar_advancedcloakroom',
        component: ComponentCreator('/esxscripts/category/esxpaidkonar_advancedcloakroom', 'c64'),
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
        path: '/esxscripts/konar_advancedcloakroom/esx_konar_advancedcloakroom',
        component: ComponentCreator('/esxscripts/konar_advancedcloakroom/esx_konar_advancedcloakroom', '9f3'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/qbscripts',
    component: ComponentCreator('/qbscripts', '41c'),
    routes: [
      {
        path: '/qbscripts/category/qbpaidkonar_advancedcloakroom',
        component: ComponentCreator('/qbscripts/category/qbpaidkonar_advancedcloakroom', '503'),
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
        path: '/qbscripts/konar_advancedcloakroom/qb_konar_advancedcloakroom',
        component: ComponentCreator('/qbscripts/konar_advancedcloakroom/qb_konar_advancedcloakroom', 'cf5'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/standalonescripts',
    component: ComponentCreator('/standalonescripts', '6dd'),
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
    component: ComponentCreator('/', '153'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
