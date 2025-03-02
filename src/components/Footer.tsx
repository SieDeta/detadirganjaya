import { HiMiniEnvelope } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center p-4 md:text-base text-sm mb-5">
      <div className="text-gray-500 font-light text-sm">&copy; 2025 Sie Deta Dirganjaya. All rights reserved.</div>

      <a href="mailto:deta.semarang@gmail.com" className="text-gray-500 font-light flex items-center gap-1">
        <HiMiniEnvelope className="text-lg mt-[1.2px]" />
        <span>deta.semarang@gmail.com</span>
      </a>
    </footer>
  );
};

export default Footer;
