import "./Footer.css";
import JClogo from "../../assets/logos/JClogo.webp";
import FooterAccordion from "./FooterAccordion";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <FooterAccordion title="Contáctenos">
          <p>7225668959</p>
          <p>Lunes - Viernes</p>
          <p>9:00 a.m. - 2:00 p.m.</p>

          <h4>Blog</h4>
          <a href="#">Casos de éxito</a>
        </FooterAccordion>


        <FooterAccordion title="Diseño de páginas">
          <a href="#">Negocio propio</a>
          <a href="#">Empresa</a>
          <a href="#">Industria mayor</a>
          <a href="#">Soporte técnico</a>
        </FooterAccordion>


        <FooterAccordion title="Atención al Cliente">
          <a href="#">Sobre Nosotros</a>
          <a href="#">Soporte Técnico</a>
          <a href="#">Software y Controladores</a>
          <a href="#">Preguntas Frecuentes</a>
        </FooterAccordion>


        <FooterAccordion title="Mi Diseño">
          <a href="#">Mi Cuenta</a>
          <a href="#">Mostrar avance</a>
        </FooterAccordion>


        <div className="footer-logo">
          <img src={JClogo} alt="logo jc" />
        </div>


        <FooterAccordion title="Mantente Conectado">
          <div className="social-iconos">
            <a href="#">📘</a>
            <a href="#">▶️</a>
            <a href="#">❌</a>
          </div>
        </FooterAccordion>

      </div>


      <hr />

      <div className="footer-bottom">
        <p>
          © 2026 JC Desarrollo Web. Todos los derechos reservados.
        </p>

        <div className="footer-links">
          <a href="#">Términos</a>
          <a href="#">Privacidad</a>
        </div>
      </div>

    </footer>
  );
}