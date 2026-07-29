import { useState } from "react";
import "./FooterAccordion.css";

interface FooterAccordionProps {
  title: string;
  children: React.ReactNode;
}

export default function FooterAccordion({
  title,
  children,
}: FooterAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="footer-accordion">
      <button
        className="footer-accordion-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>

        <span className={isOpen ? "arrow open" : "arrow"}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="footer-accordion-content">
          {children}
        </div>
      )}
    </div>
  );
}