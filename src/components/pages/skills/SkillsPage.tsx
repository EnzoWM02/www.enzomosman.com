import styles from './SkillsPage.module.css';
import 'src/utils/Common.css';

import React from 'react';

import { motion } from 'framer-motion';
import { ExitAnimation } from 'src/utils/Animations.tsx';
import { useTranslation } from 'react-i18next';
import {
  Section,
  ISkill,
  skills,
} from 'src/components/pages/skills/SkillsList.tsx';
import SkillsSections from 'src/components/pages/skills/SkillsSections.tsx';

export default function SkillsPage() {
  const { t } = useTranslation();

  const sectionSkill = Object.values(Section).map((section) => {
    const skillArr: ISkill[] = [];
    for (const skill of Object.values(skills)) {
      if (skill.section === section) skillArr.push(skill);
    }
    return skillArr;
  });

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
        <span className={`title`}>{t('skills.title')}</span>
        <span className={`desc`}>{t('skills.desc')}</span>
      </motion.div>
      <div className={`${styles.skillsSectionContainer}`}>
        {sectionSkill.map((skills: ISkill[], idx: number) => {
          return (
            <React.Fragment key={`section_${idx}`}>
              <motion.div style={{ width: '100%' }} variants={itemVariants}>
                <SkillsSections sectionedSkills={skills} />
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
