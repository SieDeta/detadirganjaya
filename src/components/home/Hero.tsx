import ContactInfo from "@/components/home/ContactInfo";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithubAlt, FaLinkedin, FaYoutube } from "react-icons/fa6";

const contactData = {
  email: "deta.semarang@gmail.com",
  address: "Central Java, Indonesia",
  socialLinks: [
    {
      name: "Youtube",
      icon: <FaYoutube className="text-2xl" />,
      url: "https://www.youtube.com/@detadir",
    },
    { name: "GitHub", icon: <FaGithubAlt className="text-2xl" />, url: "https://github.com/SieDeta" },
    {
      name: "Linkedin",
      icon: <FaLinkedin className="text-xl" />,
      url: "https://www.linkedin.com/in/detadirganjaya/",
    },
    {
      name: "Instagram",
      icon: <AiFillInstagram className="text-2xl" />,
      url: "https://www.instagram.com/siedeta/",
    },
  ],
};

const Hero = () => {
  return (
    <section className="bg-gray-50 shadow border border-gray-200 p-10 mb-6 rounded-3xl mt-5">
      <div className="container mx-auto max-w-2xl flex items-center gap-4 md:flex-row flex-col-reverse">
        <div className="flex-1 flex flex-col space-y-4">
          <div>
            <h1 className="md:text-3xl text-2xl tracking-wide border-b-4 border-b-primary mb-2 w-fit pb-2">Sie Deta Dirganjaya</h1>
            <p className="text-lg font-light">Undergraduate Student of Computer Science</p>
            <a href="https://dinus.ac.id/" target="_blank" className="text-lg text-link">
              Dian Nuswantoro University
            </a>
          </div>

          <ContactInfo contactData={contactData} />
        </div>

        <div>
          <img src="../images/profile5.JPG" alt="hero" className="rounded-xl object-cover w-full h-56 shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
