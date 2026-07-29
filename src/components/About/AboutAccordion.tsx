import { useState } from "react";
import "./AboutAccordion.css";

interface AboutAccordionProps {
  title: string;
  children: React.ReactNode;
}

export default function AboutAccordion({
  title,
  children,
}: AboutAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="about-accordion">
      <button
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>

        <span className={isOpen ? "arrow open" : "arrow"}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
}