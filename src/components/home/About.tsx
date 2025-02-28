import Heading from "@/components/Heading";
import { FaRegIdCard } from "react-icons/fa6";

const About = () => {
  return (
    <section className="my-12">
      <Heading title="About me" icon={<FaRegIdCard className="text-3xl" />} />
      <div className="space-y-3 text-lg font-light mb-3">
        <p>
          Hello! I am currently pursuing a Bachelor's degree in Computer Science at{" "}
          <a href="https://dinus.ac.id/" target="_blank" className="text-link">
            Dian Nuswantoro University
          </a>
          . Alongside my studies, I work as a Research Assistant at the{" "}
          <a href="https://dinus.ac.id/fakultas-ilmu-komputer/" target="_blank" className="text-link">
            Dian Nuswantoro Research Center
          </a>{" "}
          under the supervision of{" "}
          <a href="https://scholar.google.com/citations?user=pRFwdLQAAAAJ&hl=en" target="_blank" className="text-link">
            Dr. Guruh Fajar Shidik
          </a>{" "}
          . Additionally, I serve as a Teaching Assistant for the Data Science{" "}
          <a href="https://sti.dinus.ac.id/BK" target="_blank" className="text-link">
            Career Guidance Class
          </a>{" "}
          at Dian Nuswantoro University's where I support students in developing their skills in data analysis and machine learning. Furthermore, as part of{" "}
          <a href="https://bengkelkoding.dinus.ac.id/" target="_blank" className="text-link">
            AI Research and Development Group (Bengkel Koding)
          </a>
          , I contribute to research and development, focusing on innovative projects that drive campus advancements.
        </p>
        <p>
          My research interest focuses on <b>network performance optimization</b> and the <b>application of AI and machine learning</b> for networking. I am particularly interested in developing large-scale systems and research platforms
          that enhance the efficiency and reliability of <b>cloud and data center networking</b>.
        </p>
        <p>
          My motivation is that by utilizing ML techniques, I seek to address real-world challenges specifically in networking, ensuring seamless integration and application of machine learning in complex networked environments to improve
          overall system performance and management.
        </p>
      </div>
    </section>
  );
};

export default About;
