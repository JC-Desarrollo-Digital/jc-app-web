import "./Footer.css";
import JClogo from '../../assets/logos/JClogo.webp';

export default Footer;
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h3>Contáctenos</h3>
          <p>7225668959</p>
          <p>Lunes - Viernes</p>
          <p>9:00 a.m. - 2:00 p.m.</p>

          <h4>Blog</h4>
          <a href="#">Casos de exito</a>
        </div>

        <div className="footer-col">
          <h3>Diseño de paginas</h3>
          <a href="#">Negocio propio</a>
          <a href="#">Empresa</a>
          <a href="#">Industria mayor</a>
          <a href="#">Soporte tecnico</a>
        </div>

        <div className="footer-col">
          <h3>Atención al Cliente</h3>
          <a href="#">Sobre Nosotros</a>
          <a href="#">Soporte Técnico</a>
          <a href="#">Software y Controladores</a>
          <a href="#">Preguntas Frecuentes</a>
        </div>

        <div className="footer-col">
          <h3>Mi Diseño</h3>
          <a href="#">Mi Cuenta</a>
          <a href="#">Mostrar avance</a>
        </div>

        <div className="footer-logo">
          <img src={JClogo} alt="logo jc"/>
        </div>

        <div className="footer-col">
          <h3>Mantente Conectado</h3>

          <div className="social-iconos">
            <a href="#">📘</a>
            <a href="#">▶️</a>
            <a href="#">❌</a>
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

