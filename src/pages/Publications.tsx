import PublicationCard from "@/components/publications/PublicationCard";
import Heading from "@/components/Heading";
import { FaRegFileAlt } from "react-icons/fa";
import { publications } from "@/data/publicationData";

const Publications = () => {
  return (
    <div className="pt-5 mb-12">
      <Heading
        title="Publications"
        icon={<FaRegFileAlt className="text-3xl" />}
      />
      {publications
        .sort((a, b) => Number(b.year) - Number(a.year))
        .map((publicationYear) => (
          <div key={publicationYear.year} className="mt-8">
            <h1 className="text-xl font-light text-gray-700">
              {publicationYear.year}
            </h1>
            <div className="mt-4 space-y-4">
              {publicationYear.publication.map((publication, index) => (
                <PublicationCard key={index} {...publication} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Publications;
