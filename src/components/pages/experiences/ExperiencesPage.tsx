import styles from './ExperiencesPage.module.css';

import React, { useState } from 'react';
import DefaultTabLayout from 'src/components/ui/navigation/DefaultTabLayout.tsx';
import { useTranslation } from 'react-i18next';
import { itemVariants } from 'src/utils/Animations.tsx';
import { motion } from 'framer-motion';
import Timeline from 'src/components/ui/timeline/Timeline.tsx';
import { ProfessionalExperiencesList } from 'src/components/pages/experiences/ExperiencesList.tsx';

export default function ExperiencesPage() {
  enum tabs {
    'professional',
    'formation',
  }

  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState(tabs.professional);

  return (
    <DefaultTabLayout title={'experiences.title'}>
      <div className={`${styles.experiencesPageWrapper}`}>
        <div className={`${styles.sideBar}`}>
          <div className={`${styles.tabs}`}>
            <motion.span
              variants={itemVariants}
              className={`${
                selectedTab === tabs.professional && styles.active
              }`}
              onClick={() => setSelectedTab(tabs.professional)}
            >
              {t('experiences.tab1')}
            </motion.span>
            <motion.span
              variants={itemVariants}
              className={`${selectedTab === tabs.formation && styles.active}`}
              onClick={() => setSelectedTab(tabs.formation)}
            >
              {t('experiences.tab2')}
            </motion.span>
          </div>
          <motion.div
            variants={itemVariants}
            className={`${styles.separator}`}
          />
        </div>

        <motion.div variants={itemVariants}>
          {selectedTab === tabs.professional && <ProfessionalTab />}
          {selectedTab === tabs.formation && <FormationTab />}
        </motion.div>
      </div>
    </DefaultTabLayout>
  );
}

function ProfessionalTab() {
  console.log('ProfessionalExperiencesList', ProfessionalExperiencesList);
  return (
    <motion.div variants={itemVariants}>
      <Timeline items={ProfessionalExperiencesList} />
    </motion.div>
  );
}

function FormationTab() {
  return <motion.div variants={itemVariants}>formacao</motion.div>;
}
