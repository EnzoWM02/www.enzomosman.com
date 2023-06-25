import styles from './Skills.module.css';

import React from 'react';

import { motion } from 'framer-motion';

export default function SkillsPage() {
  return (
    <motion.div
      className={`${styles.outletContainer}`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -25, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className={`${styles.box}`}></div>
    </motion.div>
  );
}
