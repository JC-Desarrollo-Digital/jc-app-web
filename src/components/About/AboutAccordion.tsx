import { useEffect, useState } from "react";
import "./AboutAccordion.css";

interface AboutAccordionProps {
  title: string;
  children: React.ReactNode;
}

export default function AboutAccordion({
  title,
  children,
}: AboutAccordionProps) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [isOpen, setIsOpen] = useState(!isMobile);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;

      setIsMobile(mobile);

      //En computadoras siempre abiertos
      if (!mobile) {
        setIsOpen(true);
      }

      //Al detectar el movil automaticamente se cierran
      if (mobile) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="About-accordion">
      <button
        className="accordion-header"
        onClick={() => isMobile && setIsOpen(!isOpen)}
      >
        <span>{title}</span>

        {isMobile && <span className={isOpen ? "arrow open" : "arrow"}>▼</span>}
      </button>

      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
}
