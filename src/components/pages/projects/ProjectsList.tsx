import styles from './ProjectsList.module.css';

import React from 'react';

import { ISkill, Skills } from 'src/components/pages/skills/SkillsList.tsx';
import { Translation } from 'react-i18next';
import Button from 'src/components/ui/Button.tsx';

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
    name: 'portfolio',
    title: 'projects.list.portfolio.title',
    description: 'projects.list.portfolio.description',
    miniatureImage: 'miniature',
    link: 'https://github.com/EnzoWM02/enzo-portfolio',
    skills: [Skills.Reactjs, Skills.Typescript, Skills.Html, Skills.Css],
    ctaButton: (
      <Translation>
        {(t) => (
          <Button
            className={`${styles.ctaButton}`}
            onClick={() => window.open('https://github.com/EnzoWM02/enzo-portfolio')}
          >
            <div className={`${styles.portfolioCtaButton}`}>
              {t('learnMore')}
              <i className="fa-brands fa-github" />
            </div>
          </Button>
        )}
      </Translation>
    ),
  },
];
