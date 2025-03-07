export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export const experiences: ExperienceItem[] = [
  {
    title: "Systems and AI Research (SYAIR) Training Program",
    company: "University of Chicago",
    period: "Jan 2025 - Now",
    location: "Remote, United States-Indonesia",
    responsibilities: [
      "Covered 20+ technical papers from SIGCOMM and NSDI conferences",
      "Replicated and reproduced key experiments from top-tier publications.",
      "Received intensive training in research methodologies, technical writing, and engagement with top-tier research communities.",
    ],
  },
  {
    title: "Research Assistant",
    company: "Dian Nuswantoro University Research Center",
    period: "Sep 2024 - Now",
    location: "Hybrid, Semarang",
    responsibilities: [
      "Experienced in the area of Artificial Intelligence (AI), Distributed Systems, Image Processing, and Distributed Computing.",
      "Optimizing workload distribution based on CPU and RAM utilization using the Cluster RL Q-Learning technique an FEC environment simulated with CloudSimSDN",
      "Analyzing and testing the impact of the ”selective” parameter frequency in the SSVSG method on Named Entity Recognition (NER) for Indonesian disaster dataset",
    ],
  },
  {
    title: "Teaching Assistant",
    company: "Dian Nuswantoro University Career Guidance",
    period: "Sep 2024 - Feb 2025",
    location: "On-Site, Semarang",
    responsibilities: [
      "Assisting and teaching students in a career guidance class, preparing them for entering the workforce.",
      "Responsible for teaching Data Science classes with a total of 50 students.",
      "Provided subject matter on data collection, data pre-processing, data visualization, and modeling using ML models.",
    ],
  },
  {
    title: "Research Assistant",
    company: "AI Research and Development Group",
    period: "Sep 2024 - Feb 2025",
    location: "On-Site, Semarang",
    responsibilities: [
      "Developed a Virtual Smart Assistant (VSA) system integrating real-time facial recognition and emotion detection with an LLM-based chatbot, enabling users to interact seamlessly through text-to-speech technology.",
      "Involved in research with computer science lecturers in conducting research on preventing cyberbullying on social media using ML through the Multi-Modal framework.",
    ],
  },
];
