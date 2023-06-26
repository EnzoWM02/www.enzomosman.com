export interface ISkillsList {
  section: string;
  list: string[];
}

const SkillsList: Array<ISkillsList> = [
  {
    section: 'frontend',
    list: ['html', 'css', 'javascript', 'reactjs', 'typescript', 'nextjs'],
  },
  {
    section: 'backend',
    list: ['java', 'postgresql', 'spring', 'hibernate', 'nodejs'],
  },
  {
    section: 'others',
    list: ['git', 'docker', 'linux'],
  },
  {
    section: 'softSkills',
    list: ['communication', 'teamwork', 'proactive', 'creative'],
  },
];

export default SkillsList;
