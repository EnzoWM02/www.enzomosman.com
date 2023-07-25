import styles from './ProjectCard.module.css';
import React, { useEffect, useState } from 'react';
import { IProject } from 'src/components/pages/projects/ProjectsList.tsx';
import SkillIcon from 'src/components/ui/SkillIcon.tsx';
import { useTranslation } from 'react-i18next';

export default function ProjectCard({ project }: { project: IProject }) {

  const { t } = useTranslation();

  const [image, setImage] = useState<string>('');

  useEffect(() => {
    (async function () {
      try {
        const { default: imageUrl } = await import(
          `../../../assets/projectImages/${project.name}/${project.miniatureImage}.png`
        );
        setImage(imageUrl);
      } catch (e) {
        console.error('Error when fetching image for ', project.name, e);
      }
    })();
  }, []);

  return (
    <div className={`${styles.cardWrapper}`}>
      <div className={`${styles.imageSkillsContainer}`}>
        <img src={image} alt={`Image for ${project.name}`} />
        <div className={`${styles.skillsContainer}`}>
          {project.skills.map((skill, idx) => {
            return <SkillIcon imageName={skill.name} />;
          })}
        </div>
      </div>
      <div className={`${styles.textContainer}`}>
        <span className={`${styles.title}`}>{t(project.title)}</span>
        <span className={`${styles.desc}`}>{t(project.description)}</span>
        {project.ctaButton}
      </div>
    </div>
  );
}
