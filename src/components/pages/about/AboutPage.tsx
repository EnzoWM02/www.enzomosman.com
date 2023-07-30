import styles from './AboutPage.module.css';

import React from 'react';
import DefaultTabLayout from 'src/components/ui/navigation/DefaultTabLayout.tsx';

export default function AboutPage() {
  return (
    <DefaultTabLayout title={'about.title'}>
      <div className={`${styles.pageWrapper}`}></div>
    </DefaultTabLayout>
  );
}
