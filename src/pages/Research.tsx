import Heading from "@/components/Heading";
import Highlights from "@/components/research/Highlights";
import { FaRocket } from "react-icons/fa6";

const Research = () => {
  return (
    <>
      <div className="pt-6">
        <Heading title="Research" icon={<FaRocket className="text-3xl" />} />
        <div className="mt-6 text-gray-700 space-y-4 font-light text-lg">
          <p>My research utilizes machine learning (ML) to solve real-world problems at both the national and international levels:</p>
          <ul className="list-decimal pl-5 space-y-2">
            <li>Addressing both national and international issues using ML.</li>
            <li>Optimizing ML systems and networks to enhance speed and efficiency.</li>
            <li>Validating ML performance through extensive empirical evaluation.</li>
          </ul>
          <p>
            I believe that ML should be applied thoughtfully and selectively, targeting the most suitable system components rather than being used indiscriminately. Therefore, my research consistently integrates ML solutions with edge
            devices and cloud/server networks. I am highly motivated to tackle the challenges faced by system operators in adopting ML-based solutions, with a strong focus on improving real-world applicability—particularly in terms of
            optimization, security, resilience, generalization, and efficiency.
          </p>
          <p>My work has embedded ML intelligence into various networked systems and edge devices. A selection of key projects I have developed is listed below.</p>
        </div>

        <Highlights />
      </div>
    </>
  );
};

export default Research;
