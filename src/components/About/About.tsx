import "./About.css";
import ScrollFloat from "../react-bits/ScrollFloat/ScrollFloat";

export default function About() {
  return (
    <section className="about">
      <div className="about-header">
        <span className="about-label">QUIÉNES SOMOS</span>

        <ScrollFloat>
          Tecnología que resuelve, diseño que comunica.
        </ScrollFloat>
      </div>

      <div className="about-content">
        <p className="about-intro">
          Creamos experiencias digitales para negocios que quieren verse
          profesionales, funcionar mejor y crecer.
        </p>

        <p className="about-description">
          Combinamos diseño, desarrollo y estrategia para convertir ideas en
          productos digitales claros, rápidos y fáciles de usar.
        </p>
      </div>

      <div className="about-values">
        <article>
          <span>01</span>

          <h3>Claridad</h3>

          <p>Soluciones simples de entender y fáciles de utilizar.</p>
        </article>

        <article>
          <span>02</span>

          <h3>Tecnología</h3>

          <p>
            Herramientas modernas para crear productos rápidos y preparados para
            crecer.
          </p>
        </article>

        <article>
          <span>03</span>

          <h3>Cercanía</h3>

          <p>
            Trabajamos directamente contigo desde la idea hasta la
            implementación.
          </p>
        </article>
      </div>
    </section>
  );
}
