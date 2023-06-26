import styles from './SkillsSections.module.css';

import React, {
  useEffect,
  useState,
} from 'react';

import { ISkillsList } from '@/components/pages/skills/SkillsList.tsx';
import { useTranslation } from 'react-i18next';

export default function SkillsSections({ section, list }: ISkillsList) {
  const { t } = useTranslation();

  return (
    <div className={`${styles.sectionWrapper}`}>
      <div>
        <span className={`${styles.sectionTitle}`}>
          {t(`skills.${section}.title`)}
        </span>
      </div>
      <div className={`${styles.skillsContainer}`}>
        {list.map((value: string, idx: number) => {
          return (
            <SkillCard
              section={section}
              value={value}
              key={`skill_${idx}`}
            />
          );
        })}
      </div>
    </div>
  );
}

function SkillCard({ section, value }: { section: string; value: string }) {
  const { t } = useTranslation();

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
    <div className={`${styles.cardWrapper}`}>
      <div className={`${styles.imageContainer}`}>
        <img src={image} alt={`${value}_logo`} />
      </div>
      <span className={`${styles.skillCardTitle}`}>
        {t(`skills.${section}.list.${value}`)}
      </span>
    </div>
  );
}
