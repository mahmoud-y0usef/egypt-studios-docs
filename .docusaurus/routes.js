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
    component: ComponentCreator('/esxscripts', 'f38'),
    routes: [
      {
        path: '/esxscripts/car_remote/esx_car_remote',
        component: ComponentCreator('/esxscripts/car_remote/esx_car_remote', '871'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/esxscripts/category/esxpaidcar_remote',
        component: ComponentCreator('/esxscripts/category/esxpaidcar_remote', 'c6e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/esxscripts/category/esxpaidflight_job',
        component: ComponentCreator('/esxscripts/category/esxpaidflight_job', '971'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/esxscripts/category/esxpaidkonar_advancedcloakroom',
        component: ComponentCreator('/esxscripts/category/esxpaidkonar_advancedcloakroom', 'c64'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/esxscripts/flight_job/esx_flight_job',
        component: ComponentCreator('/esxscripts/flight_job/esx_flight_job', '033'),
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
    component: ComponentCreator('/qbscripts', '068'),
    routes: [
      {
        path: '/qbscripts/car_remote/qb_car_remote',
        component: ComponentCreator('/qbscripts/car_remote/qb_car_remote', 'e4b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qbscripts/category/qbpaidcar_remote',
        component: ComponentCreator('/qbscripts/category/qbpaidcar_remote', '018'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
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
    component: ComponentCreator('/standalonescripts', 'd66'),
    routes: [
      {
        path: '/standalonescripts/animation_menu/animation_menu',
        component: ComponentCreator('/standalonescripts/animation_menu/animation_menu', '980'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/standalonescripts/category/standalonepaid-animation-menu',
        component: ComponentCreator('/standalonescripts/category/standalonepaid-animation-menu', '7ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/standalonescripts/category/standalonepaid-radio',
        component: ComponentCreator('/standalonescripts/category/standalonepaid-radio', '5a5'),
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
        path: '/standalonescripts/konar_radio/Konar_Radio',
        component: ComponentCreator('/standalonescripts/konar_radio/Konar_Radio', 'e10'),
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
