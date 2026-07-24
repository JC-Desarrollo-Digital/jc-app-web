import "./Header.css";
import logo from "../../assets/logos/JCLogo.webp";

export default function Header() {
  return (
    <header className="header">

      <div className="brand">

        <div className="logo-box">
          <img src={logo} alt="JC Desarrollo Digital" />
        </div>

        <div className="brand-name">
          <h1>JC Desarrollo Digital</h1>
          <p>Soluciones Tecnológicas</p>
        </div>

      </div>


      <nav className="nav">
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>

          <li>
            <a href="/servicios">Servicios</a>
          </li>

          <li>
            <a href="/proyectos">Proyectos</a>
          </li>

          <li>
            <a href="/contacto">Contacto</a>
          </li>
        </ul>
      </nav>

    </header>
  );
}


