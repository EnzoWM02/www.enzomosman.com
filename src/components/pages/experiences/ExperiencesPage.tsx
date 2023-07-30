import styles from './ExperiencesPage.module.css';

import React, { useState } from 'react';
import DefaultTabLayout from 'src/components/ui/navigation/DefaultTabLayout.tsx';
import { useTranslation } from 'react-i18next';
import { itemVariants } from 'src/utils/Animations.tsx';
import { motion } from 'framer-motion';
import Timeline from 'src/components/ui/timeline/Timeline.tsx';
import {
  FormationExperiencesList,
  ProfessionalExperiencesList,
} from 'src/components/pages/experiences/ExperiencesList.tsx';

export default function ExperiencesPage() {
  enum tabs {
    'professional',
    'formation',
  }

  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState(tabs.professional);

  return (
    <DefaultTabLayout title={'experiences.title'}>
      <motion.div
        variants={itemVariants}
        className={`${styles.experiencesPageWrapper}`}
      >
        <div className={`${styles.sideBar}`}>
          <div className={`${styles.tabs}`}>
            <span
              className={`${
                selectedTab === tabs.professional && styles.active
              }`}
              onClick={() => setSelectedTab(tabs.professional)}
            >
              {t('experiences.tab1')}
            </span>
            <span
              className={`${selectedTab === tabs.formation && styles.active}`}
              onClick={() => setSelectedTab(tabs.formation)}
            >
              {t('experiences.tab2')}
            </span>
          </div>
          <div className={`${styles.separator}`} />
        </div>

        <motion.div
          variants={itemVariants}
          className={`${styles.tabsContainer}`}
        >
          {selectedTab === tabs.professional && <ProfessionalTab />}
          {selectedTab === tabs.formation && <FormationTab />}
        </motion.div>
      </motion.div>
    </DefaultTabLayout>
  );
}

function ProfessionalTab() {
  return (
    <motion.div variants={itemVariants}>
      <Timeline items={ProfessionalExperiencesList} />
    </motion.div>
  );
}

function FormationTab() {
  return (
    <motion.div variants={itemVariants}>
      <Timeline items={FormationExperiencesList} />
    </motion.div>
  );
}
