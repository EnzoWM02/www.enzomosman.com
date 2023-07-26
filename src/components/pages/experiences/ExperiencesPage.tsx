import styles from './ExperiencesPage.module.css'

import React from 'react';
import DefaultTabLayout from 'src/components/ui/navigation/DefaultTabLayout.tsx';
import { useTranslation } from 'react-i18next';

export default function ExperiencesPage () {

  const {t} = useTranslation();

  return (
    <DefaultTabLayout title={'experiences.title'}>
      <div className={`${styles.experiencesPageWrapper}`}>
        <div className={`${styles.tabs}`}>
          <span>{t('experiences.tab1')}</span>
          <span>{t('experiences.tab2')}</span>
        </div>
        <div className={`${styles.separator}`} />
      </div>
    </DefaultTabLayout>
  )
}