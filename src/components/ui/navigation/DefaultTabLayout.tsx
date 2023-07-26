import React from 'react';
import styles from 'src/components/ui/navigation/DefaultTabLayout.module.css';
import { ExitAnimation, itemVariants } from 'src/utils/Animations.tsx';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface IDefaultTabLayout {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

export default function DefaultTabLayout({
  children,
  className,
  title,
  description,
}: IDefaultTabLayout) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      className={`${className}`}
      {...ExitAnimation}
    >
      {!!title && (
        <motion.div
          className={`${styles.headerContainer}`}
          variants={itemVariants}
        >
          <span className={`title`}>{t(title)}</span>
          {!!description && <span className={`desc`}>{t(description)}</span>}
        </motion.div>
      )}
      {children}
    </motion.div>
  );
}