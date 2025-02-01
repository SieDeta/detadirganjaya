import ContactInfo from "@/components/ContactInfo";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithubAlt, FaGoogleScholar } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";

const contactData = {
  email: "deta.semarang@gmail.com",
  address: "Jl. Mars I No. H/7, Semarang",
  socialLinks: [
    {
      name: "Twitter",
      icon: <RiTwitterXLine className="text-2xl" />,
      url: "",
    },
    { name: "GitHub", icon: <FaGithubAlt className="text-2xl" />, url: "" },
    {
      name: "Google Scholar",
      icon: <FaGoogleScholar className="text-xl" />,
      url: "",
    },
    {
      name: "Instagram",
      icon: <AiFillInstagram className="text-2xl" />,
      url: "",
    },
  ],
};

const Hero = () => {
  return (
    <section className="bg-gray-50 shadow border border-gray-200 p-10 mb-6 rounded-3xl mt-5">
      <div className="container mx-auto max-w-2xl flex items-center gap-4 md:flex-row flex-col-reverse">
        <div className="flex-1 flex flex-col space-y-4">
          <div>
            <h1 className="md:text-3xl text-2xl tracking-wide border-b-4 border-b-primary mb-2 w-fit pb-2">
              Sie Deta Dirganjaya
            </h1>
            <p className="text-lg font-light">
              Assistant Professor of Computer Science A
            </p>
            <p className="text-lg font-light">
              Affiliate Professor of Electrical & Computer Engineering
            </p>
            <a
              href="https://dinus.ac.id/"
              target="_blank"
              className="text-lg text-link"
            >
              Dian Nuswantoro University
            </a>
          </div>

          <ContactInfo contactData={contactData} />
        </div>

        <div>
          <img
            src="../images/deta-dirganjaya.png"
            alt="hero"
            className="rounded-xl object-cover w-full h-56 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
