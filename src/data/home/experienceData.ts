export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export const experiences: ExperienceItem[] = [
  {
    title: "Operations Analyst",
    company: "D'Plasindo Enterprises",
    period: "Jan 2024 - Now",
    location: "Semarang, Indonesia",
    responsibilities: [
      "Developed a system to predict monthly raw material needs to eliminate the company's pre-order system, visualized in the form of a website.",
      "Responsible for data analysis, modeling, visualization, maintenance, and development of models.",
      "Analyzed data, created models, and visualized data to support business decision-making.",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "D’Plasindo Enterprises",
    period: "Aug 2023 - Dec 2023",
    location: "Semarang, Indonesia",
    responsibilities: [
      "Developed a private website with a bookkeeping system, catalog bookkeeping, and order recording.",
      "Responsible for the design and responsiveness of the website.",
      "Designed and implemented databases, including CRUD operations.",
    ],
  },
  {
    title: "Revenue Analyst",
    company: "CV Sanjaya Utama",
    period: "Feb 2023 - Jun 2023",
    location: "Semarang, Indonesia",
    responsibilities: [
      "Developed a promotional item system to increase company revenue.",
      "Responsible for data analysis, modeling, visualization, maintenance, and development of models.",
      "Analyzed data, created models, and visualized data to support company revenue growth.",
    ],
  },
  {
    title: "Front End Web Developer",
    company: "Toko Tangga Johar",
    period: "Sep 2022 - Feb 2023",
    location: "Semarang, Indonesia",
    responsibilities: [
      "Led a team of 4 members in the development of an online store website.",
      "Responsible for the design and responsiveness of the website.",
      "Developed and implemented intuitive and engaging user interfaces.",
    ],
  },
];
