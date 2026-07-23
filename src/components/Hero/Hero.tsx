import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Creamos soluciones digitales para tu negocio</h1>

        <p>
          En JC Desarrollo Web diseñamos páginas web modernas, rápidas y
          profesionales que ayudan a tu empresa a crecer en el mundo digital.
        </p>

        <div className="hero-buttons">
          <a href="#" className="btn-primary">
            Cotizar proyecto
          </a>

          <a href="#" className="btn-secondary">
            Ver servicios
          </a>
        </div>
      </div>

      <div className="hero-card">
        <div className="card">
          <h2>JC Desarrollo Digital</h2>

          <p>Desarrollo | Diseño | Tecnología</p>

          <div className="code-box">
            {"<web>"}
            <br />
            &nbsp;&nbsp;Innovación Digital
            <br />
            {"</web>"}
          </div>
        </div>
      </div>
    </section>
  );
}
