import React from 'react';
import HomePage from '../components/pages/home/HomePage.tsx';
import SkillsPage from '../components/pages/skills/SkillsPage.tsx';

export interface IRoute {
  path: string;
  title: string;
  icon: string;
  component: React.ReactNode;
}

export const NavbarPagesRoutes: Array<IRoute> = [
  {
    path: '/',
    title: 'navbar.home',
    icon: 'fa-house',
    component: <HomePage />,
  },
  {
    path: '/skills',
    title: 'navbar.skills',
    icon: 'fa-hammer',
    component: <SkillsPage />,
  },
  {
    path: '/',
    title: 'navbar.projects',
    icon: 'fa-list-check',
    component: <HomePage />,
  },
  {
    path: '/',
    title: 'navbar.formation',
    icon: 'fa-vial',
    component: <HomePage />,
  },
  {
    path: '/',
    title: 'navbar.about',
    icon: 'fa-question',
    component: <HomePage />,
  },
];
