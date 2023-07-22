import styles from './SkillsPage.module.css';
import '@/utils/Common.css';

import React from 'react';

import { motion } from 'framer-motion';
import { ExitAnimation } from '@/utils/Animations.tsx';
import { useTranslation } from 'react-i18next';
import SkillsList, {
  ISkillsList,
} from '@/components/pages/skills/SkillsList.tsx';
import SkillsSections from '@/components/pages/skills/SkillsSections.tsx';

export default function SkillsPage() {
  const { t } = useTranslation();

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className={`${styles.outletContainer}`}
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      {...ExitAnimation}
    >
        <motion.div
          className={`${styles.headerContainer}`}
          variants={itemVariants}
        >
          <span className={`title`}>{t('skills.title')}</span>
          <span className={`desc`}>{t('skills.desc')}</span>
        </motion.div>
        <div className={`${styles.skillsSectionContainer}`}>
          {SkillsList.map((item: ISkillsList, idx: number) => {
            return (
              <React.Fragment key={`section_${idx}`}>
                <motion.div style={{ width: '100%' }} variants={itemVariants}>
                  <SkillsSections section={item.section} list={item.list} />
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className={`${styles.containerSeparator}`}
                >
                  <div className={`${styles.separator}`} />
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>
    </motion.div>
  );
}
