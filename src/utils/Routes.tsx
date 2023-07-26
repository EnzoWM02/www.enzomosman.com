import React from 'react';
import HomePage from 'src/components/pages/home/HomePage.tsx';
import SkillsPage from 'src/components/pages/skills/SkillsPage.tsx';
import ProjectsPage from 'src/components/pages/projects/ProjectsPage.tsx';
import ExperiencesPage from 'src/components/pages/experiences/ExperiencesPage.tsx';

export interface IRoute {
  path: string;
  title: string;
  icon: string;
  component: React.ReactNode;
}

export const NavbarPagesRoutes: Array<IRoute> = [
  {
    path: '/',
    title: 'home.title',
    icon: 'fa-solid fa-house',
    component: <HomePage />,
  },
  {
    path: '/skills',
    title: 'skills.title',
    icon: 'fa-solid fa-hammer',
    component: <SkillsPage />,
  },
  {
    path: '/projects',
    title: 'projects.title',
    icon: 'fa-solid fa-list-check',
    component: <ProjectsPage />,
  },
  {
    path: '/experiences',
    title: 'experiences.title',
    icon: 'fa-solid fa-vial',
    component: <ExperiencesPage />,
  },
  {
    path: '/about',
    title: 'about.title',
    icon: 'fa-solid fa-question',
    component: <HomePage />,
  },
];
