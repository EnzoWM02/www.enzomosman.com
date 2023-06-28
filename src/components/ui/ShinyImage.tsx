import styles from './ShinyImage.module.css';

import React from 'react';

import { motion } from 'framer-motion';

export interface IShinyImage {
  imageSrc: string;
  imageAlt?: string;
  className?: string;
}

export default function ShinyImage({
  imageSrc,
  imageAlt = '',
  className = '',
}: IShinyImage) {
  return (
    <div className={`${className} ${styles.imageWrapper}`}>
      <motion.img className={`${styles.image}`} src={imageSrc} alt={imageAlt} />
    </div>
  );
}