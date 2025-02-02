import { HiMiniEnvelope } from "react-icons/hi2";
import { FaCompass } from "react-icons/fa6";

interface SocialLink {
  name: string;
  icon: JSX.Element;
  url: string;
}

interface ContactData {
  email: string;
  address: string;
  socialLinks: SocialLink[];
}

interface ContactInfoProps {
  contactData: ContactData;
}

const ContactInfo = ({ contactData }: ContactInfoProps) => {
  return (
    <div className="text-lg font-light space-y-1">
      <a
        href={`mailto:${contactData.email}`}
        className="font-light flex items-center gap-2"
      >
        <HiMiniEnvelope className="text-lg mt-[1.2px]" />
        <span>{contactData.email}</span>
      </a>
      <a href="" className="font-light flex items-center gap-2">
        <FaCompass className="text-lg mt-[1.2px]" />
        <span>{contactData.address}</span>
      </a>
      <div className="flex items-center gap-2 mt-2">
        {contactData.socialLinks.map((social, index) => (
          <a key={index} href={social.url}>
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
