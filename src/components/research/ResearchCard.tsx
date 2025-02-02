import { FaCode, FaQuoteRight, FaRegCirclePlay } from "react-icons/fa6";
import { FaFileAlt, FaRegFileAlt } from "react-icons/fa";
import ButtonLink from "@/components/ButtonLink";
import Accordion from "@/components/Accordion";

type Link = {
  type: "publication" | "citation" | "code" | "video";
  url: string;
};

type ResearchCardProps = {
  date: string;
  event: string;
  title: string;
  authors: string;
  summary: string;
  image: string;
  links: Link[];
};

const ResearchCard = (props: ResearchCardProps) => {
  const getIcon = (type: Link["type"]): JSX.Element => {
    switch (type) {
      case "publication":
        return <FaRegFileAlt className="text-sm" />;
      case "citation":
        return <FaQuoteRight className="text-sm" />;
      case "code":
        return <FaCode className="text-sm" />;
      case "video":
        return <FaRegCirclePlay className="text-sm" />;
      default:
        return <FaFileAlt className="text-sm" />;
    }
  };

  return (
    <div className="my-2">
      <div className="flex md:flex-row flex-col gap-3 md:mb-0 mb-3">
        <div className="space-y-2 flex-1">
          <p className="label">
            {props.date} | {props.event}
          </p>
          <h3 className="text-lg">{props.title}</h3>
          <p className="text-gray-600 font-light">{props.authors}</p>
          <div className="flex gap-2">
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

        <img
          src={props.image}
          alt={props.title}
          className="w-77 h-40 object-cover rounded-xl"
        />
      </div>
      <Accordion content={props.summary} title="Read summary" />
    </div>
  );
};

export default ResearchCard;
