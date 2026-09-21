import "./Footer.css";
import JClogo from "../../assets/logos/JClogo.webp";
import FooterAccordion from "./FooterAccordion";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <FooterAccordion title="Contáctanos">
          {" "}
          <p>5544475622</p> <p>Lunes - Viernes</p> <p>9:00 a.m. - 2:00 p.m.</p>{" "}
        </FooterAccordion>
        {/**
        <FooterAccordion title="Soporte">
          <a href="#">Soporte Técnico</a>
          <a href="#">Términos</a>
          <a href="#">Privacidad</a>
        </FooterAccordion>
 */}
        <FooterAccordion title="Servicios">
          <a href="#">Páginas Web</a>
          <a href="#">Aplicaciones Móviles</a>
          <a href="#">Software a la Medida</a>
        </FooterAccordion>
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={JClogo} alt="JC Desarrollo Digital" />
          </div>

          <div className="social-iconos">
            <a
              href="https://www.instagram.com/jc.desarrollo.digital?stkn=MXMxemV2a2JjcHZ0bQ=="
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/5215544475622?text=Hola%20JC%20Desarrollo%20Digital,%20me%20interesa%20conocer%20sus%20servicios."
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2026 JC Desarrollo Digital. Todos los derechos reservados.</p>

        <div className="footer-links">
          <a href="#">Términos</a>
          <a href="#">Privacidad</a>
        </div>
      </div>
    </footer>
  );
}
