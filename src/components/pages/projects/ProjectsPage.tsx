import React from 'react'
import { useTranslation } from 'react-i18next';
import styles from 'src/components/pages/skills/SkillsPage.module.css';
import { ExitAnimation } from 'src/utils/Animations.tsx';
import { motion } from 'framer-motion';

export default function ProjectsPage () {
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
      {...ExitAnimation}
    >
      <motion.div
        className={`${styles.headerContainer}`}
        variants={itemVariants}
      >
        <span className={`title`}>{t('projects.title')}</span>
      </motion.div>
    </motion.div>
  )
}