import { TimelineSectionData } from 'src/components/ui/timeline/Timeline.tsx';

enum ProfessionalExperiences {
  JuniorDeveloperClinicaExperts = 'juniorDeveloperClinicaExperts',
  FullStackDevBimachine = 'fullStackDevBimachine',
  TechnicalSupportBimachine = 'technicalSupportBimachine',
}

enum FavoriteProfessionalExperiences {
  JuniorDeveloperClinicaExperts = 'juniorDeveloperClinicaExperts',
  FullStackDevBimachine = 'fullStackDevBimachine',
}

type FormationExperienceKeys = 'softwareEngineer' | 'fisk' | 'bomJesus';

enum FormationExperiences {
  SoftwareEngineer = 'softwareEngineer',
  Fisk = 'fisk',
  BomJesus = 'bomJesus',
}

enum FavoriteFormationExperiences {
  SoftwareEngineer = 'softwareEngineer',
}

export const ProfessionalExperiencesList: TimelineSectionData[] = Object.values(
  ProfessionalExperiences
).map((item: string) => {
  return {
    date: `experiences.professional.${item}.date`,
    company: `experiences.professional.${item}.company`,
    title: `experiences.professional.${item}.title`,
    description: `experiences.professional.${item}.description`,
    level: `experiences.professional.${item}.level`,
    isFavorite: Object.values(FavoriteProfessionalExperiences).some(
      (e) => e === item
    ),
  };
});

export const FormationExperiencesList: TimelineSectionData[] = Object.values(
  FormationExperiences
).map((item) => {
  return {
    date: `experiences.formation.${item}.date`,
    company: `experiences.formation.${item}.company`,
    title: `experiences.formation.${item}.title`,
    description: `experiences.formation.${item}.description`,
    level: '',
    isFavorite: Object.values(FavoriteFormationExperiences).some(
      (e) => e === (item as string)
    ),
  };
});
