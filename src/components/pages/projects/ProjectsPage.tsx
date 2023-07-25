import styles from 'src/components/pages/skills/SkillsPage.module.css';

import React from 'react';

import { useTranslation } from 'react-i18next';
import { ExitAnimation } from 'src/utils/Animations.tsx';
import { motion } from 'framer-motion';
import { Projects } from 'src/components/pages/projects/ProjectsList.tsx';
import ProjectCard from 'src/components/pages/projects/ProjectCard.tsx';
import LowFidelityImage from 'src/assets/projectImages/lowFidelity.png'

export default function ProjectsPage() {
  const { t } = useTranslation();

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      className={`${styles.projectsPageWrapper}`}
      {...ExitAnimation}
    >
      <motion.div
        className={`${styles.headerContainer}`}
        variants={itemVariants}
      >
        <span className={`title`}>{t('projects.title')}</span>
      </motion.div>
      <motion.div className={`${styles.projectCardsContainer}`}>
        {Projects.map((project, idx) => {
          return (
            <motion.div variants={itemVariants}>
              <ProjectCard project={project} key={idx} />
            </motion.div>
          );
        })}
        <motion.div className={`${styles.comingSoonProjectsContainer}`} variants={itemVariants}>
          <img className={`${styles.lowFidelityImage}`} src={LowFidelityImage} alt={'Low fidelity image for coming soon projects'} />
          <span>{t('projects.comingSoon')}</span>
        </motion.div>

      </motion.div>
    </motion.div>
  );
}
