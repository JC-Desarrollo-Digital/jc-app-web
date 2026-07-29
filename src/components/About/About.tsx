import AboutAccordion from "./AboutAccordion";
import "./About.css";

export default function About() {
  return (
    <section className="about">
      <h1>JC Desarrollo Digital</h1>

      <p>
        En JC Desarrollo Digital nos especializamos en el desarrollo de
        soluciones web modernas, ofreciendo servicios de diseño, desarrollo y
        mantenimiento de sitios web adaptados a las necesidades y expectativas
        de cada cliente.
      </p>

      <AboutAccordion title="¿Por qué elegirnos?">
        <ul>
          <li>✔ Desarrollo web personalizado para cada proyecto.</li>
          <li>✔ Diseño moderno, responsivo y fácil de usar.</li>
          <li>✔ Soporte y atención continua durante el desarrollo.</li>
        </ul>
      </AboutAccordion>

    </section>
  );
}