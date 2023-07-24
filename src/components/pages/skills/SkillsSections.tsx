import styles from './SkillsSections.module.css';

import React from 'react';

import { ISkill } from 'src/components/pages/skills/SkillsList';
import { useTranslation } from 'react-i18next';
import SkillIcon from 'src/components/ui/SkillIcon.tsx';

export default function SkillsSections({
  sectionedSkills,
}: {
  sectionedSkills: ISkill[];
}) {
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
          return <SkillCard skill={value}  key={`skill_${idx}`} />;
        })}
      </div>
    </div>
  );
}

function SkillCard({ skill }: { skill: ISkill }) {
  const { t } = useTranslation();

  return (
    <div className={`${styles.cardWrapper}`}>
      <SkillIcon imageName={skill.name} title={false} />
      <span className={`${styles.skillCardTitle}`}>{t(skill.title)}</span>
    </div>
  );
}
