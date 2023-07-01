import styles from './HomePage.module.css';
import '@/utils/Common.css';

import React from 'react';
import { useTranslation } from 'react-i18next';

import photo from '@/assets/temp.png';

import { motion } from 'framer-motion';
import { ExitAnimation } from '@/utils/Animations.tsx';
import ShinyImage from '@/components/ui/ShinyImage.tsx';
import SocialButtons from '@/components/ui/SocialButtons.tsx';
import { useLayoutContext } from '@/hooks/useLayoutContext.tsx';

export default function HomePage() {
  const { t } = useTranslation();
  const { isLowRes, mobileBreakpoint } = useLayoutContext();

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: -25 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <React.Fragment>
      <motion.div
        className={`${styles.outletContainer}`}
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        {...ExitAnimation}
      >
        <div className={`${styles.titleContainer} ${isLowRes && styles.lowRes} ${mobileBreakpoint && styles.mobile}`}>
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
            <motion.div variants={itemVariants} className={`${styles.mobileImageContainer}`}>
              <ShinyImage className={`${styles.mobileImage}`} imageSrc={photo} imageAlt={'enzo photo'} />
            </motion.div>
          )}
          {!mobileBreakpoint && (
            <motion.span variants={itemVariants} className={`${styles.desc}`}>
              {t('home.desc')}
            </motion.span>
          )}
          <motion.div className={`${styles.socialButtonsContainer}`} variants={itemVariants}>
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
            className={`${styles.imageContainer} ${isLowRes && styles.lowRes}`}
          >
            <motion.div className={`${styles.outerCircle}`} />
            <motion.div className={`${styles.outerFullCircle}`} />
            <motion.div className={`${styles.innerFullCircle}`} />
            <ShinyImage className={`${styles.shinyImage}`} imageSrc={photo} imageAlt={'enzo photo'} />
          </motion.div>
        )}
      </motion.div>
    </React.Fragment>
  );
}
