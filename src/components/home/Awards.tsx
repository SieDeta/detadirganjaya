import Heading from "@/components/Heading";
import { FaTrophy } from "react-icons/fa6";
import { awards } from "@/data/home/awardsData";
import ReactMarkdown from "react-markdown";

const Awards = () => {
  return (
    <section className="my-12">
      <Heading
        title="Awards & Recognitions"
        icon={<FaTrophy className="text-3xl" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {awards.map((award, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-xl p-4"
          >
            <ReactMarkdown
              className="text-lg font-semibold"
              components={{
                a: ({ ...props }) => (
                  <a
                    className="text-link !font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                  />
                ),
              }}
            >
              {award.title}
            </ReactMarkdown>

            <p className="text-gray-500 font-light text-sm">
              {award.event} | {award.year}
            </p>

            <div className="grid grid-cols-2 gap-3 my-2 text-sm">
              {award.image.map((img, idx) => (
                <img
                  key={idx}
                  alt={award.title}
                  src={img.src}
                  className="w-full h-32 object-cover rounded-lg"
                />
              ))}
            </div>

            <ReactMarkdown
              className="mt-2 text-gray-700 font-light"
              components={{
                a: ({ ...props }) => (
                  <a
                    className="text-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                  />
                ),
              }}
            >
              {award.description}
            </ReactMarkdown>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
