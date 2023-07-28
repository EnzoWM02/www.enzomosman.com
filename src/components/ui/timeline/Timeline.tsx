import styles from './Timeline.module.css';
import { ProfessionalExperiencesList } from 'src/components/pages/experiences/ExperiencesList.tsx';
import { useTranslation } from 'react-i18next';

export type TimelineSectionData = {
  date: string;
  title: string;
  company: string;
  description: string;
};

interface ITimeline {
  className?: string;
  items: TimelineSectionData[];
}

export default function Timeline({ className = '', items }: ITimeline) {
  return (
    <div className={`${styles.timeLineWrapper} ${className} `}>
      <div className={`${styles.itemsContainer}`}>
        {items.map((item, idx) => {
          return (
            <TimelineSection
              item={item}
              left={!!(idx % 2)}
              last={items.length - 1 === idx}
            />
          );
        })}
      </div>
    </div>
  );
}

interface IDataSection {
  item: TimelineSectionData;
}

interface ITimelineSection extends IDataSection {
  left: boolean;
  last: boolean;
}

function TimelineSection({ item, left, last }: ITimelineSection) {
  return (
    <div className={`${styles.timelineSectionContainer}`}>
      {left && <DataSection item={item} />}
      <div className={`${styles.lineContainer}`}>
        <div className={`${styles.ball}`} />
        <div className={`${styles.line}`} />
        {last && <div className={`${styles.ball}`} />}
      </div>
      {!left && <DataSection item={item} />}
    </div>
  );
}

function DataSection({ item }: IDataSection) {
  const { t } = useTranslation();
  return (
    <div>
      <span className={`${styles.dataTitle}`}>{t(item.date)}</span>
    </div>
  );
}
