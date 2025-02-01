import Heading from "@/components/Heading";
import { FaBriefcase } from "react-icons/fa6";

const Experience = () => {
  return (
    <section className="my-12">
      <Heading title="Experience" icon={<FaBriefcase className="text-3xl" />} />

      <div className="grid grid-cols-2 gap-8 mt-8">
        {/* Card 1 */}
        <div className="bg-white border-[1.5px] border-gray-300 rounded-xl">
          <div className="bg-sky-50 border-b-[1.5px] border-gray-300 rounded-t-xl p-2 px-4">
            <h3 className="text-lg">Software Developer</h3>
            <p className="text-gray-500 font-light text-sm">
              XYZ Company | Jan 2020 - Present
            </p>
          </div>
          <div className="p-4">
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                Developed user-friendly web applications using ReactJS and
                TailwindCSS
              </li>
              <li>
                Collaborated with cross-functional teams to define, design, and
                ship new features
              </li>
              <li>
                Ensured high performance and responsiveness across platforms
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
