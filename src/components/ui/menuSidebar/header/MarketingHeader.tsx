import styles from './MarketingHeader.module.css'

import React from 'react';

import photo from '@/assets/temp.png';
import ShinyImage from '@/components/ui/ShinyImage.tsx';
import SocialButtons from '@/components/ui/SocialButtons.tsx';

export default function MarketingHeader () {
  return (
    <div className={`${styles.marketingHeaderWrapper}`}>
      <ShinyImage imageSrc={photo} />
      <SocialButtons />
    </div>
  )
}