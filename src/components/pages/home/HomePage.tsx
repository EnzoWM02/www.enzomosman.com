import styles from './HomePage.module.css';
import 'src/utils/Common.css';

import React from 'react';
import { useTranslation } from 'react-i18next';

import photo from 'src/assets/temp.png';

import { motion } from 'framer-motion';
import { itemVariants } from 'src/utils/Animations.tsx';
import ShinyImage from 'src/components/ui/ShinyImage.tsx';
import SocialButtons from 'src/components/ui/SocialButtons.tsx';
import { useLayoutContext } from 'src/hooks/useLayoutContext.tsx';
import DefaultTabLayout from 'src/components/ui/navigation/DefaultTabLayout.tsx';

export default function HomePage() {
  const { t } = useTranslation();
  const { mobileBreakpoint } = useLayoutContext();

  const imageVariant = {
    hidden: { opacity: 0, x: -25 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <DefaultTabLayout className={styles.outletContainer}>
      <div className={`${styles.titleContainer}`}>
        <motion.span variants={itemVariants} className={`title`}>
          {t('home.title1')}
        </motion.span>
        <motion.span
          variants={itemVariants}
          className={`${styles.secondTitle}`}
        >
          {t('home.title2')}
        </motion.span>
        {mobileBreakpoint && (
          <motion.div
            variants={itemVariants}
            className={`${styles.mobileImageContainer}`}
          >
            <ShinyImage
              className={`${styles.mobileImage}`}
              imageSrc={photo}
              imageAlt={'enzo photo'}
            />
          </motion.div>
        )}
        {!mobileBreakpoint && (
          <motion.span variants={itemVariants} className={`${styles.desc}`}>
            {t('home.desc')}
          </motion.span>
        )}
        <motion.div
          className={`${styles.socialButtonsContainer}`}
          variants={itemVariants}
        >
          <SocialButtons />
        </motion.div>
        {mobileBreakpoint && (
          <motion.span variants={itemVariants} className={`${styles.desc}`}>
            {t('home.desc')}
          </motion.span>
        )}
      </div>
      {!mobileBreakpoint && (
        <motion.div
          variants={imageVariant}
          className={`${styles.imageContainer}`}
        >
          <motion.div className={`${styles.outerCircle}`} />
          <motion.div className={`${styles.outerFullCircle}`} />
          <motion.div className={`${styles.innerFullCircle}`} />
          <ShinyImage
            className={`${styles.shinyImage}`}
            imageSrc={photo}
            imageAlt={'enzo photo'}
          />
        </motion.div>
      )}
    </DefaultTabLayout>
  );
}
