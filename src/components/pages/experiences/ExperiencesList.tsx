import { TimelineSectionData } from 'src/components/ui/timeline/Timeline.tsx';

enum ProfessionalExperiences {
  TechnicalSupportBimachine = 'technicalSupportBimachine',
  FullStackDevBimachine = 'fullStackDevBimachine',
}

export const ProfessionalExperiencesList: TimelineSectionData[] = Object.values(
  ProfessionalExperiences
).map((item) => {
  return {
    date: `experiences.professional.${item}.date`,
    title: `experiences.professional.${item}.title`,
    company: `experiences.professional.${item}.company`,
    description: `experiences.professional.${item}.description`,
  };
});
