import styles from './Timeline.module.css'

export type TimelineSectionData = {
  dateTitle: string,
  description: string,
}

interface ITimeline {
  className?: string,
  items: TimelineSectionData[],
}

export default function Timeline ({className = '', items}: ITimeline) {
  
  return (
    <div className={`${className} `}>

    </div>
  )
}

interface ITimelineSection {
  item: TimelineSectionData
}

function TimelineSection ({item}: ITimelineSection) {

  return (
    <div>

    </div>
  )
}