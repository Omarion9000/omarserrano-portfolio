export type Stat = { value: string; label: string };

export type Job = {
  title: string;
  org: string;
  type: string;
  dates: string;
  location: string;
  bullets: string[];
};

export type EducationItem = {
  name: string;
  org: string;
  dates: string;
  note?: string;
};

export type AppItem = {
  name: string;
  url: string;
  urlLabel: string;
  image: string;
  desc: string;
  stack: string;
};

export type Dict = {
  meta: { title: string; description: string };
  nav: {
    project: string;
    skills: string;
    apps: string;
    experience: string;
    education: string;
    contact: string;
    resume: string;
  };
  hero: {
    location: string;
    title: string;
    tools: string;
    intro: string;
    ctaProject: string;
    ctaResume: string;
    chartCaption: string;
    chartLabels: { baseline: string; gold: string; energy: string; other: string; latest: string };
  };
  project: {
    label: string;
    title: string;
    questionLabel: string;
    question: string;
    answerLabel: string;
    answer: string;
    stats: Stat[];
    dashboardAlt: string;
    dashboardCaption: string;
    didLabel: string;
    did: string[];
    toolsLabel: string;
    tools: string[];
    openDashboard: string;
    openRepo: string;
  };
  skills: {
    heading: string;
    groups: { title: string; items: string[] }[];
  };
  apps: {
    heading: string;
    sub: string;
    visit: string;
    items: AppItem[];
  };
  experience: { heading: string; items: Job[] };
  education: {
    heading: string;
    educationLabel: string;
    certsLabel: string;
    items: EducationItem[];
    certs: EducationItem[];
  };
  contact: {
    heading: string;
    body: string;
    email: string;
    linkedin: string;
    github: string;
    tableau: string;
  };
  footer: { rights: string };
  resume: {
    pageTitle: string;
    targetTitle: string;
    download: string;
    back: string;
    summaryLabel: string;
    summary: string;
    skillsLabel: string;
    skills: { label: string; value: string }[];
    projectsLabel: string;
    projectTitle: string;
    projectDates: string;
    projectBullets: string[];
    experienceLabel: string;
    educationLabel: string;
    languagesLabel: string;
    languages: string;
  };
};
