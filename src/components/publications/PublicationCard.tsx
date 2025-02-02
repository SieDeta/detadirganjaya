import { FaQuoteRight, FaRegFile } from "react-icons/fa6";
import ButtonLink from "@/components/ButtonLink";
import { FaRegFileAlt } from "react-icons/fa";

type Link = {
  type: "publication" | "citation";
  url: string;
};

type PublicationCardProps = {
  year?: string;
  title: string;
  authors: string;
  description: string;
  links: Link[];
};

const getIcon = (type: Link["type"]): JSX.Element => {
  switch (type) {
    case "publication":
      return <FaRegFileAlt className="text-sm" />;
    case "citation":
      return <FaQuoteRight className="text-sm" />;
    default:
      return <FaRegFile className="text-sm" />;
  }
};

const PublicationCard = (props: PublicationCardProps) => {
  return (
    <div className="border border-l-4 border-l-primary border-gray-200 p-4 rounded-lg shadow-sm bg-white">
      <div className="space-y-2">
        <h2 className="text-lg mb-1">{props.title}</h2>
        <p className="text-gray-800 font-light">{props.authors}</p>
        <p className="text-gray-500 font-light">{props.description}</p>
      </div>
      <div className="flex gap-2 mt-3">
        {props.links.map((link, index) => (
          <ButtonLink
            key={index}
            link={link.url}
            text={link.type}
            icon={getIcon(link.type)}
          />
        ))}
      </div>
    </div>
  );
};

export default PublicationCard;
