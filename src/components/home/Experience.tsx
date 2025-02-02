import Heading from "@/components/Heading";
import { FaBriefcase } from "react-icons/fa6";
import { experiences } from "@/data/home/experienceData";

const Experience = () => {
  return (
    <section className="my-12">
      <Heading title="Experience" icon={<FaBriefcase className="text-3xl" />} />
      <div className="grid md:grid-cols-2 gap-8 mt-8">
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
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
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
