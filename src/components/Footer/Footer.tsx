import "./Footer.css";
import JClogo from "../../assets/logos/JClogo.webp";
import FooterAccordion from "./FooterAccordion";

import {
  FaPhone,
  FaClock,
  FaFileLines,
  FaStore,
  FaBuilding,
  FaIndustry,
  FaScrewdriverWrench,
  FaCircleInfo,
  FaLaptopCode,
  FaCircleQuestion,
  FaUser,
  FaChartLine,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <FooterAccordion title="Contáctanos">
          <p>
            <FaPhone /> 7225668959
          </p>

          <p>
            <FaClock /> Lunes - Viernes
          </p>

          <p>
            <FaClock /> 9:00 a.m. - 2:00 p.m.
          </p>

          <h4>Blog</h4>

          <a href="#">
            <FaFileLines /> Casos de éxito
          </a>
        </FooterAccordion>

        <FooterAccordion title="Diseño de páginas">
          <a href="#">
            <FaStore /> Negocio propio
          </a>

          <a href="#">
            <FaBuilding /> Empresa
          </a>

          <a href="#">
            <FaIndustry /> Industria mayor
          </a>

          <a href="#">
            <FaLaptopCode /> Soporte técnico
          </a>
        </FooterAccordion>

        <FooterAccordion title="Atención al Cliente">
          <a href="#">
            <FaCircleInfo /> Sobre Nosotros
          </a>

          <a href="#">
            <FaScrewdriverWrench /> Soporte Técnico
          </a>

          <a href="#">
            <FaLaptopCode /> Software y Controladores
          </a>

          <a href="#">
            <FaCircleQuestion /> Preguntas Frecuentes
          </a>
        </FooterAccordion>

        <FooterAccordion title="Mi Diseño">
          <a href="#">
            <FaUser /> Cuenta
          </a>

          <a href="#">
            <FaChartLine /> Mostrar avance
          </a>
        </FooterAccordion>

        <div className="footer-brand">
          <div className="footer-logo">
            <img src={JClogo} alt="logo jc" />
          </div>

          <div className="footer-brand">
            <div className="social-iconos">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>

              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>

              <a href="#" aria-label="X">
                <FaXTwitter />
              </a>
          </div>
        </div>
      </div>


      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2026 JC Desarrollo Web. Todos los derechos reservados.</p>

        <div className="footer-links">
          <a href="#">Términos</a>
          <a href="#">Privacidad</a>
        </div>
      </div>
    </footer>
  );
}