import HeaderAccordion from "./HeaderAccordion";
import "./Header.css";

export default function Header() {

  return (
    <header className="header">


      {/* LOGO Y NOMBRE */}
      <div className="brand">

        <div className="logo-box">
          JC
        </div>


        <div className="brand-name">

          <h1>
            JC Desarrollo Digital
          </h1>

          <p>
            Soluciones Tecnológicas
          </p>

        </div>

      </div>



      {/* MENU PC */}
      <nav className="nav-menu">

        <a href="#">
          Inicio
        </a>

        <a href="#">
          Servicios
        </a>

        <a href="#">
          Proyectos
        </a>

        <a href="#">
          Contacto
        </a>

      </nav>



      {/* MENU MOVIL */}
      <HeaderAccordion>

        <a href="#">
          Inicio
        </a>

        <a href="#">
          Servicios
        </a>

        <a href="#">
          Proyectos
        </a>

        <a href="#">
          Contacto
        </a>

      </HeaderAccordion>


    </header>
  );
}