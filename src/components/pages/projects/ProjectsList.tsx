import React from 'react';

import { ISkill, Skills } from 'src/components/pages/skills/SkillsList.tsx';
import CtaButton from 'src/components/ui/ctaButton/CtaButton';

export interface IProject {
  name: string;
  title: string;
  description: string;
  miniatureImage: string;
  link: string;
  skills: ISkill[];
  ctaButton: React.ReactNode;
}

export const Projects: IProject[] = [
  {
    name: 'learner',
    title: 'projects.list.learner.title',
    description: 'projects.list.learner.description',
    miniatureImage: 'miniature',
    link: 'https://github.com/EnzoWM02/learner',
    skills: [Skills.Nextjs, Skills.Reactjs, Skills.Postgresql],
    ctaButton: <CtaButton link="https://github.com/EnzoWM02/learner" />,
  },
  {
    name: 'himalayas-jobs',
    title: 'projects.list.himalayas.title',
    description: 'projects.list.himalayas.description',
    miniatureImage: 'miniature',
    link: 'https://github.com/EnzoWM02/himalaya-jobs',
    skills: [Skills.Vuejs, Skills.Typescript],
    ctaButton: <CtaButton link="https://github.com/EnzoWM02/himalaya-jobs" />,
  },
  {
    name: 'portfolio',
    title: 'projects.list.portfolio.title',
    description: 'projects.list.portfolio.description',
    miniatureImage: 'miniature',
    link: 'https://github.com/EnzoWM02/enzo-portfolio',
    skills: [Skills.Reactjs, Skills.Typescript, Skills.Html, Skills.Css],
    ctaButton: <CtaButton link="https://github.com/EnzoWM02/enzo-portfolio" />,
  },
];
