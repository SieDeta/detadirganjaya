import Heading from "@/components/Heading";
import { FaRegIdCard } from "react-icons/fa6";

const About = () => {
  return (
    <section className="my-12">
      <Heading title="About me" icon={<FaRegIdCard className="text-3xl" />} />
      <div className="space-y-3 text-lg font-light mb-3">
        <p>
          I am an Assistant Professor of Computer Science at{" "}
          <a href="https://dinus.ac.id/" target="_blank" className="text-link">
            Dian Nuswantoro University
          </a>
          . I am also an Affiliate Professor of Electrical & Computer
          Engineering. I am passionate about teaching and research in the field
          of computer science and engineering.
        </p>
        <p>
          As a freelancer specializing in data science and machine learning, I
          have the expertise to transform data into actionable insights and
          innovative solutions. I don't just stop at data analysis; I also have
          the capability to develop web-based applications, complete with
          appealing designs and databases tailored to your needs. With a
          combination of my technical skills and creativity, I am ready to help
          you optimize the potential of your data to achieve your business
          goals.
        </p>
      </div>
    </section>
  );
};

export default About;
