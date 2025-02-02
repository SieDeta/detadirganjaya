import Heading from "@/components/Heading";
import { FaBriefcase } from "react-icons/fa6";

const experiences = [
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

const Experience = () => {
  return (
    <section className="my-12">
      <Heading title="Experience" icon={<FaBriefcase className="text-3xl" />} />

      <div className="grid grid-cols-2 gap-8 mt-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white border-gray-300">
            <div className="bg-gray-50 border-b-[1.5px] border-gray-200 p-2 px-4">
              <h3 className="text-lg">{exp.title}</h3>
              <p className="text-gray-500 font-light text-sm">
                {exp.period} | {exp.company} | {exp.location}
              </p>
            </div>
            <div className="p-4">
              <ul className="list-disc pl-4 text-gray-700 space-y-2">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
