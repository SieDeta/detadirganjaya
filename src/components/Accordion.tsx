import { useState, useRef } from "react";
import { HiChevronDown } from "react-icons/hi2";

type AccordionProps = {
  content: string;
  title: string;
};

const Accordion = ({ content, title }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleSummary = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <button
        onClick={toggleSummary}
        className="text-primary mb-2 group hover:font-medium cursor-pointer flex items-center"
      >
        {title}
        <HiChevronDown
          className={`ml-1 text-gray-500 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          transition: "max-height 0.3s ease-in-out",
        }}
        className="overflow-hidden"
      >
        <p className="bg-gray-100 p-3 rounded-xl border border-gray-200 font-light mb-3">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
