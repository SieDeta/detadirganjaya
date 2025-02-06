export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export const experiences: ExperienceItem[] = [
  {
    title: "Research Assistant",
    company: "Dian Nuswantoro University Research Center",
    period: "Sep 2024 - Now",
    location: "Semarang, Indonesia",
    responsibilities: [
      "Responsible for conducting research to handle international indexed journal publications.",
      "Responsible for preparing research proposals, conducting research, writing journal manuscripts, revising journals.",
      "My work focuses on the application of AI and ML to improve efficiency and optimization in the fields of Image Processing, Healthcare, Cloud and Quantum computing.",
    ],
  },
  {
    title: "Teaching Assistant",
    company: "Dian Nuswantoro University Career Guidance",
    period: "Sep 2024 - Feb 2025",
    location: "Semarang, Indonesia",
    responsibilities: [
      "Assisting and teaching students in a career guidance class, preparing them for entering the workforce.",
      "Responsible for teaching Data Science classes with a total of 50 students.",
      "Provided subject matter on data collection, data pre-processing, data visualization, and modeling using ML models.",
    ],
  },
  {
    title: "Research Assistant",
    company: "Bengkel Koding",
    period: "Sep 2024 - Feb 2025",
    location: "Semarang, Indonesia",
    responsibilities: [
      "Developed a Virtual Smart Assistant (VSA) system integrating real-time facial recognition and emotion detection with an LLM-based chatbot, enabling users to interact seamlessly through text-to-speech technology.",
      "Involved in research with computer science lecturers in conducting research on preventing cyberbullying on social media using ML through the Multi-Modal framework.",
    ],
  },
  {
    title: "Revenue Analyst",
    company: "CV Sanjaya Utama",
    period: "Feb 2023 - Jul 2023",
    location: "Semarang, Indonesia",
    responsibilities: [
      "Developed a system for generating product bundle promotions used by the company for product marketing using the Association method.",
      "Responsible for data analysis, modeling, visualization, maintenance, and development of models to support business decision-making.",
    ],
  },
];
