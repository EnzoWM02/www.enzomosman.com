import styles from './SkillsSections.module.css';

import React, { useEffect, useState } from 'react';

import { ISkillsList } from '@/components/pages/skills/SkillsList.tsx';
import { useTranslation } from 'react-i18next';
import { useLayoutContext } from '@/hooks/useLayoutContext.tsx';

export default function SkillsSections({ section, list }: ISkillsList) {
  const { t } = useTranslation();
  const contextLayout = useLayoutContext();

  return (
    <div className={`${styles.sectionWrapper} ${contextLayout.mobileBreakpoint && styles.mobile}`}>
      <div>
        <span className={`${styles.sectionTitle}`}>
          {t(`skills.${section}.title`)}
        </span>
      </div>
      <div className={`${styles.skillsContainer} ${contextLayout.mobileBreakpoint && styles.mobile}`}>
        {list.map((value: string, idx: number) => {
          return (
            <SkillCard section={section} value={value} key={`skill_${idx}`} />
          );
        })}
      </div>
    </div>
  );
}

function SkillCard({ section, value }: { section: string; value: string }) {
  const { t } = useTranslation();
  const layoutContext = useLayoutContext();

  const [image, setImage] = useState<string>('');

  useEffect(() => {
    (async function () {
      try {
        const { default: imageUrl } = await import(
          `../../../assets/skillsLogo/${value}.png`
        );
        setImage(imageUrl);
      } catch (e) {
        console.error('Error when fetching image for ', value, e);
      }
    })();
  }, []);

  return (
    <div className={`${styles.cardWrapper} ${layoutContext.mobileBreakpoint && styles.mobile}`}>
      <img className={`${layoutContext.mobileBreakpoint && styles.mobile}`} src={image} alt={`${value}_logo`} />
      <span className={`${styles.skillCardTitle}`}>
        {t(`skills.${section}.list.${value}`)}
      </span>
    </div>
  );
}
