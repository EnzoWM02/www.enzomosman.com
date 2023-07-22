import React from 'react';
import HomePage from '../components/pages/home/HomePage.tsx';
import SkillsPage from '../components/pages/skills/SkillsPage.tsx';
import ProjectsPage from '@/components/pages/projects/ProjectsPage.tsx';

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
    icon: 'fa-solid fa-house',
    component: <HomePage />,
  },
  {
    path: '/skills',
    title: 'navbar.skills',
    icon: 'fa-solid fa-hammer',
    component: <SkillsPage />,
  },
  {
    path: '/projects',
    title: 'navbar.projects',
    icon: 'fa-solid fa-list-check',
    component: <ProjectsPage />,
  },
  {
    path: '/',
    title: 'navbar.formation',
    icon: 'fa-solid fa-vial',
    component: <HomePage />,
  },
  {
    path: '/',
    title: 'navbar.about',
    icon: 'fa-solid fa-question',
    component: <HomePage />,
  },
];
