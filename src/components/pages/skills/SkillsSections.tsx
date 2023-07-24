import styles from './SkillsSections.module.css';

import React, { useEffect, useState } from 'react';

import { ISkill } from 'src/components/pages/skills/SkillsList';
import { useTranslation } from 'react-i18next';

export default function SkillsSections({ sectionedSkills }: { sectionedSkills: ISkill[] }) {
  const { t } = useTranslation();

  return (
    <div className={`${styles.sectionWrapper}`}>
      <div>
        <span className={`${styles.sectionTitle}`}>
          {t(sectionedSkills[0].section)}
        </span>
      </div>
      <div className={`${styles.skillsContainer}`}>
        {sectionedSkills.map((value: ISkill, idx: number) => {
          return <SkillCard skill={value} key={`skill_${idx}`} />;
        })}
      </div>
    </div>
  );
}

function SkillCard({ skill }: { skill: ISkill }) {
  const { t } = useTranslation();

  const [image, setImage] = useState<string>('');

  useEffect(() => {
    (async function () {
      try {
        const { default: imageUrl } = await import(
          `../../../assets/skillsLogo/${skill.name}.png`
        );
        setImage(imageUrl);
      } catch (e) {
        console.error('Error when fetching image for ', skill.name, e);
      }
    })();
  }, []);

  return (
    <div className={`${styles.cardWrapper}`}>
      <img src={image} alt={`${skill.name}_logo`} />
      <span className={`${styles.skillCardTitle}`}>
        {t(skill.title)}
      </span>
    </div>
  );
}
