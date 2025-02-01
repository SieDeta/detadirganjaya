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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi velit
          quas nostrum magnam veniam veritatis tempore praesentium sunt totam
          sequi. Tempore saepe quam neque amet fugit dolorem voluptatem, ipsa
          ab. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          tempore corporis dolores sint aspernatur vitae. Nemo, minima totam
          suscipit numquam maiores facere ipsa quidem odit, quo expedita quaerat
          ipsam neque?
        </p>
      </div>
    </section>
  );
};

export default About;
