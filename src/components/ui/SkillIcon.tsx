import styles from './SkillIcon.module.css'

import { useEffect, useState } from 'react';


interface ISkillIcon {
  imageName: string;
  title?: boolean;
}

export default function SkillIcon({ imageName, title = true }: ISkillIcon) {
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    (async function () {
      try {
        const { default: imageUrl } = await import(
          `../../assets/skillsLogo/${imageName}.png`
        );
        setImage(imageUrl);
      } catch (e) {
        console.error('Error when fetching image for ', imageName, e);
      }
    })();
  }, []);

  return (
    <div className={`${styles.skillIconContainer}`} title={`${title ? imageName.charAt(0).toUpperCase() + imageName.slice(1) : ''}`}>
      <img src={image} alt={`Image of skill ${imageName}`} />
    </div>
  );
}
