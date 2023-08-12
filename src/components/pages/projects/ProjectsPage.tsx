import styles from 'src/components/pages/projects/ProjectsPage.module.css';

import React from 'react';

import { useTranslation } from 'react-i18next';
import { itemVariants } from 'src/utils/Animations.tsx';
import { motion } from 'framer-motion';
import { Projects } from 'src/components/pages/projects/ProjectsList.tsx';
import ProjectCard from 'src/components/pages/projects/ProjectCard.tsx';
import LowFidelityImage from 'src/assets/projectImages/lowFidelity.png';
import DefaultTabLayout from 'src/components/ui/navigation/DefaultTabLayout.tsx';

export default function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <DefaultTabLayout
      title={'projects.title'}
      className={styles.projectsPageWrapper}
    >
      <motion.div className={`${styles.projectCardsContainer}`}>
        {Projects.map((project, idx) => {
          return (
            <motion.div variants={itemVariants}  key={idx}>
              <ProjectCard project={project} />
            </motion.div>
          );
        })}
        <motion.div
          className={`${styles.comingSoonProjectsContainer}`}
          variants={itemVariants}
        >
          <img
            className={`${styles.lowFidelityImage}`}
            src={LowFidelityImage}
            alt={'Low fidelity image for coming soon projects'}
          />
          <span>{t('projects.comingSoon')}</span>
        </motion.div>
      </motion.div>
    </DefaultTabLayout>
  );
}
