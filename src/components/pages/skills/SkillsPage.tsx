import styles from './SkillsPage.module.css';
import 'src/utils/Common.css';

import React from 'react';

import { motion } from 'framer-motion';
import { itemVariants } from 'src/utils/Animations.tsx';
import { useTranslation } from 'react-i18next';
import {
  Section,
  ISkill,
  Skills,
} from 'src/components/pages/skills/SkillsList.tsx';
import SkillsSections from 'src/components/pages/skills/SkillsSections.tsx';
import DefaultTabLayout from 'src/components/ui/navigation/DefaultTabLayout.tsx';

export default function SkillsPage() {
  const { t } = useTranslation();

  const sectionSkill = Object.values(Section).map((section) => {
    const skillArr: ISkill[] = [];
    for (const skill of Object.values(Skills)) {
      if (skill.section === section) skillArr.push(skill);
    }
    return skillArr;
  });

  return (
    <DefaultTabLayout title={'skills.title'} description={'skills.desc'}>
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
    </DefaultTabLayout>
  );
}
