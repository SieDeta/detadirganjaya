import { FaStar } from "react-icons/fa6";
import Heading from "@/components/Heading";
import ResearchCard from "./ResearchCard";
import { researchProjects } from "@/data/researchData";

const Highlights = () => {
  return (
    <div className="mt-8">
      <Heading
        title="Research Highlights"
        icon={<FaStar className="text-3xl" />}
      />
      <hr className="border border-gray-200" />

      {researchProjects.map((research, index) => (
        <div key={index} className="mt-5">
          <ResearchCard {...research} />
          {index !== researchProjects.length - 1 && (
            <hr className="border border-gray-200" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Highlights;
