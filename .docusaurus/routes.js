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
    component: ComponentCreator('/esxscripts', 'a44'),
    routes: [
      {
        path: '/esxscripts/car_remote/esx_car_remote',
        component: ComponentCreator('/esxscripts/car_remote/esx_car_remote', '871'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/esxscripts/category/esxpaid-car-remote',
        component: ComponentCreator('/esxscripts/category/esxpaid-car-remote', 'b89'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/esxscripts/category/esxpaid-cloak-room',
        component: ComponentCreator('/esxscripts/category/esxpaid-cloak-room', 'bce'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/esxscripts/category/esxpaid-flight-job',
        component: ComponentCreator('/esxscripts/category/esxpaid-flight-job', '906'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/esxscripts/category/esxpaid-pilot-job',
        component: ComponentCreator('/esxscripts/category/esxpaid-pilot-job', '9aa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/esxscripts/cloak_room/esx_cloakroom',
        component: ComponentCreator('/esxscripts/cloak_room/esx_cloakroom', 'f32'),
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
        path: '/esxscripts/pilot_job/esx_pilot_job',
        component: ComponentCreator('/esxscripts/pilot_job/esx_pilot_job', 'd25'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/qbscripts',
    component: ComponentCreator('/qbscripts', '285'),
    routes: [
      {
        path: '/qbscripts/car_remote/qb_car_remote',
        component: ComponentCreator('/qbscripts/car_remote/qb_car_remote', 'e4b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qbscripts/category/qbpaid-car-remote',
        component: ComponentCreator('/qbscripts/category/qbpaid-car-remote', '0aa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qbscripts/category/qbpaid-cloak-room',
        component: ComponentCreator('/qbscripts/category/qbpaid-cloak-room', 'ce5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qbscripts/category/qbpaid-pilot-job',
        component: ComponentCreator('/qbscripts/category/qbpaid-pilot-job', 'df8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qbscripts/cloak_room/qb_cloakroom',
        component: ComponentCreator('/qbscripts/cloak_room/qb_cloakroom', '844'),
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
        path: '/qbscripts/pilot_job/qb_pilot_job',
        component: ComponentCreator('/qbscripts/pilot_job/qb_pilot_job', 'c3f'),
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
