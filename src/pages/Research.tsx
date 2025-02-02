import Heading from "@/components/Heading";
import Highlights from "@/components/research/Highlights";
import { FaRocket } from "react-icons/fa6";

const Research = () => {
  return (
    <>
      <div className="pt-6">
        <Heading title="Research" icon={<FaRocket className="text-3xl" />} />
        <div className="mt-6 text-gray-700 space-y-4 font-light text-lg">
          <p>
            My research takes a holistic approach to enabling practical machine
            learning (ML) for networked systems:
          </p>
          <ul className="list-decimal pl-5 space-y-2">
            <li>
              Building real systems and research platforms to lay the groundwork
              for applying ML;
            </li>
            <li>
              Leveraging domain insights to carefully devise deployable ML-based
              algorithms;
            </li>
            <li>
              Validating ML's performance through extensive empirical evidence.
            </li>
          </ul>
          <p>
            I believe that ML must be applied judiciously — rather than
            indiscriminately — to the most suitable system components.
            Therefore, my work constantly underpins or complements ML modules
            with classical techniques from systems and networking. I am
            particularly motivated to address the practical concerns of system
            operators regarding the deployment of ML-based solutions, striving
            to improve ML's real-world applicability (e.g., safety, robustness,
            generalization, and efficiency).
          </p>
          <p>
            My work has infused ML intelligence into a wide range of networked
            systems, including video streaming and conferencing systems,
            traditional and emerging networks, and cloud-native applications.
            Highlighted projects are listed below.
          </p>
        </div>

        <Highlights />
      </div>
    </>
  );
};

export default Research;
