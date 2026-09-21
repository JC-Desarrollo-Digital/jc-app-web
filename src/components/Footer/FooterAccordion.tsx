import { useState, useEffect } from "react";
import "./FooterAccordion.css";

interface FooterAccordionProps {
  title: string;
  children: React.ReactNode;
}

export default function FooterAccordion({
  title,
  children,
}: FooterAccordionProps) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [isOpen, setIsOpen] = useState(!isMobile);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;

      setIsMobile(mobile);

      if (!mobile) {
        setIsOpen(true);
      }

      if (mobile) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="footer-accordion">
      <button
        className="footer-accordion-header"
        onClick={() => isMobile && setIsOpen(!isOpen)}
      >
        <span>{title}</span>

        {isMobile && <span className={isOpen ? "arrow open" : "arrow"}>▼</span>}
      </button>

      {isOpen && <div className="footer-accordion-content">{children}</div>}
    </div>
  );
}
