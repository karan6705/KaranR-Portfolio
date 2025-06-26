import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  peer,
  tau,
  writing,
  gov,
} from "../assets";

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Machine Learning',
    icon: frontend,
  },
  {
    title: 'Database Management',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

export { services, technologies, experiences, projects };
const experiences = [
  {
    title: "Peer Academic Success Coach",
    company_name: "University Housing",
    icon: peer,
    iconBg: "#333333",
    date: "July 2025 - Present",
  },
  {
    title: "Software Engineering Intern",
    company_name: "MATC Group Inc.",
    icon: writing,
    iconBg: "#333333",
    date: "May 2025 - July 2025",
  },
  {
    title: "IT engineer Intern",
    company_name: "Gujrat AMbuja Exports LTD.",
    icon: gov,
    iconBg: "#333333",
    date: "June 2022 - December 2022",
  },
  {
    title: "IBM Student Ambassador",
    company_name: "IBM",
    icon: writing,
    iconBg: "#333333",
    date: "Jun 2022 - Aug 2022",
  },
];


const projects = [
  {
    id: "project-1",
    name: "WEB RESEARCHER AI",
    description:
      "A next-gen web scraping AI tool that helps you get filtered data from any website on the internet.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: komikult,
    repo: "https://github.com/ROS-Mapping-Localiaztion-Enviroment/ROS_MLES",
    demo: "https://github.com/ROS-Mapping-Localiaztion-Enviroment/ROS_MLES",
  },
  {
    id: "project-2",
    name: "10K REPORT SUMMARIZER",
    description:
      "A FAST_API tool that extracts essential data from 10-K annual report and provide a summarized pdf format report",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "FAST_API",
        color: "pink-text-gradient",
      },
    ],
    image: leaderboard,
    repo: "https://github.com/shaqdeff/Leaderboard",
    demo: "https://shaqdeff.github.io/Leaderboard/",
  },
];

