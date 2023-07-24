export enum Section {
  Frontend = 'skills.sections.frontend',
  Backend = 'skills.sections.backend',
  Others = 'skills.sections.others',
  SoftSkills = 'skills.sections.softSkills',
}

export interface ISkill {
  name: string;
  title: string;
  section: Section;
}

interface Skills {
  Html: ISkill;
  Css: ISkill;
  Javascript: ISkill;
  Reactjs: ISkill;
  Typescript: ISkill;
  Nextjs: ISkill;
  Java: ISkill;
  Postgresql: ISkill;
  Spring: ISkill;
  Hibernate: ISkill;
  Nodejs: ISkill;
  Git: ISkill;
  Docker: ISkill;
  Linux: ISkill;
  Communication: ISkill;
  Teamwork: ISkill;
  Proactive: ISkill;
  Creative: ISkill;
}

export const skills: Skills = {
  Html: {
    name: 'html',
    title: 'skills.list.html',
    section: Section.Frontend,
  },
  Css: {
    name: 'css',
    title: 'skills.list.css',
    section: Section.Frontend,
  },
  Javascript: {
    name: 'javascript',
    title: 'skills.list.javascript',
    section: Section.Frontend,
  },
  Reactjs: {
    name: 'reactjs',
    title: 'skills.list.reactjs',
    section: Section.Frontend,
  },
  Typescript: {
    name: 'typescript',
    title: 'skills.list.typescript',
    section: Section.Frontend,
  },
  Nextjs: {
    name: 'nextjs',
    title: 'skills.list.nextjs',
    section: Section.Frontend,
  },
  Java: {
    name: 'java',
    title: 'skills.list.java',
    section: Section.Backend,
  },
  Postgresql: {
    name: 'postgresql',
    title: 'skills.list.postgresql',
    section: Section.Backend,
  },
  Spring: {
    name: 'spring',
    title: 'skills.list.spring',
    section: Section.Backend,
  },
  Hibernate: {
    name: 'hibernate',
    title: 'skills.list.hibernate',
    section: Section.Backend,
  },
  Nodejs: {
    name: 'nodejs',
    title: 'skills.list.nodejs',
    section: Section.Backend,
  },
  Git: {
    name: 'git',
    title: 'skills.list.git',
    section: Section.Others,
  },
  Docker: {
    name: 'docker',
    title: 'skills.list.docker',
    section: Section.Others,
  },
  Linux: {
    name: 'linux',
    title: 'skills.list.linux',
    section: Section.Others,
  },
  Communication: {
    name: 'communication',
    title: 'skills.list.communication',
    section: Section.SoftSkills,
  },
  Teamwork: {
    name: 'teamwork',
    title: 'skills.list.teamwork',
    section: Section.SoftSkills,
  },
  Proactive: {
    name: 'proactive',
    title: 'skills.list.proactive',
    section: Section.SoftSkills,
  },
  Creative: {
    name: 'creative',
    title: 'skills.list.creative',
    section: Section.SoftSkills,
  },
};


export interface ISkillsList {
  section: Section;
  list: ISkill[];
}