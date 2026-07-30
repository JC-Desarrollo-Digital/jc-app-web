import HeaderAccordion from "./HeaderAccordion";
import logo from "../../assets/logos/JCLogo.webp";
import "./Header.css";


export default function Header() {

  return (

    <header className="header">


      {/* LOGO Y NOMBRE */}
      <div className="brand">


        <div className="logo-box">

          <img 
            src={logo}
            alt="JC Desarrollo Digital"
          />

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