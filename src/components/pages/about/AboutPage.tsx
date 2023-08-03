import styles from './AboutPage.module.css';

import React from 'react';
import DefaultTabLayout from 'src/components/ui/navigation/DefaultTabLayout.tsx';
import photo from 'src/assets/temp.png';
import { useTranslation } from 'react-i18next';
import SocialButtons from 'src/components/ui/SocialButtons.tsx';
import { motion } from 'framer-motion';
import { itemVariants } from 'src/utils/Animations.tsx';

export default function AboutPage() {

  const {t} = useTranslation();

  return (
    <DefaultTabLayout title={'about.title'}>
      <div className={`${styles.pageWrapper}`}>
        <div className={`${styles.pageContainer}`}>
          <RoundedImageShape />
          <motion.div variants={itemVariants} className={`${styles.textContainer}`}>
            <span className={`${styles.copy}`}>{t('about.copy')}</span>
            <div className={`${styles.email}`}>
              <i className="fa-solid fa-envelope"/>
              <span>{t('about.email')}</span>
            </div>
            <div className={`${styles.sideBar}`} />
            <SocialButtons />
          </motion.div>
        </div>
      </div>
    </DefaultTabLayout>
  );
}

function RoundedImageShape() {
  return (
    <motion.div variants={itemVariants} className={`${styles.imageShapeContainer}`}>
      <div className={`${styles.photoContainer}`}>
        <img className={`${styles.photo}`} src={photo} alt={'Enzo photo'} />
      </div>
    </motion.div>
  );
}