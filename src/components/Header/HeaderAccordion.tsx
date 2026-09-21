import { useState } from "react";
import "./HeaderAccordion.css";

interface HeaderAccordionProps {
  children: React.ReactNode;
}

export default function HeaderAccordion({ children }: HeaderAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header-accordion">
      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        ☰ Menú
      </button>

      {isOpen && <div className="menu-content">{children}</div>}
    </div>
  );
}
