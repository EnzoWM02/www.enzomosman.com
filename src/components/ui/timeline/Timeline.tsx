import { useLayoutContext } from 'src/hooks/useLayoutContext';
import styles from './Timeline.module.css';
import { useTranslation } from 'react-i18next';

export type TimelineSectionData = {
  date: string;
  company: string;
  title: string;
  description: string;
  isFavorite: boolean;
};

interface ITimeline {
  className?: string;
  items: TimelineSectionData[];
}

export default function Timeline({ className = '', items }: ITimeline) {
  const { mobileBreakpoint } = useLayoutContext();

  return (
    <div className={`${styles.timeLineWrapper} ${className} `}>
      <div className={`${styles.itemsContainer}`}>
        {items.map((item, idx) => {
          return (
            <TimelineSection
              item={item}
              left={mobileBreakpoint ? false : !!(idx % 2)}
              last={items.length - 1 === idx}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
}

interface IDataSection {
  className?: string;
  item: TimelineSectionData;
}

interface ITimelineSection extends IDataSection {
  left: boolean;
  last: boolean;
}

function TimelineSection({ item, left, last }: ITimelineSection) {
  return (
    <div
      className={`${styles.timelineSectionContainer} ${
        left ? styles.left : styles.right
      } ${last && styles.last}`}
    >
      {left ? <DataSection item={item} /> : <DateSection item={item} />}
      <div className={`${styles.lineContainer}`}>
        <div className={`${styles.ball}`} />
        <div className={`${styles.line}`} />
        {last && <div className={`${styles.ball}`} />}
      </div>
      {!left ? <DataSection item={item} /> : <DateSection item={item} />}
    </div>
  );
}

function DateSection({ item, className = '' }: IDataSection) {
  const { t } = useTranslation();
  return (
    <div className={`${className} ${styles.dateSectionContainer}`}>
      <span className={`${styles.dateTitle}`}>{t(item.date)}</span>
      <span className={`${styles.dateCompany}`}>{t(item.company)}</span>
    </div>
  );
}

function DataSection({ item, className = '' }: IDataSection) {
  const { t } = useTranslation();
  return (
    <div className={`${className} ${styles.dataSectionContainer}`}>
      <span className={`${styles.dataTitle}`}>
        {item.isFavorite && <span>⭐️ </span>}
        {t(item.title)}
      </span>
      <span
        className={`${styles.dataDesc}`}
        dangerouslySetInnerHTML={{ __html: t(item.description) }}
      />
    </div>
  );
}
