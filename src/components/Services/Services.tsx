import "./Services.css";

import paginasWeb from "../../assets/servicios/jc-paginasweb.webp";
import appsMovil from "../../assets/servicios/jc-appsmovil.webp";
import servicioSaaS from "../../assets/servicios/jc-serviciosaas.webp";

import ScrollFloat from "../react-bits/ScrollFloat/ScrollFloat";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "Páginas Web",
      image: paginasWeb,
      description:
        "Creamos sitios web profesionales que representan la identidad de tu negocio y te ayudan a conectar con tus clientes.",
      features: [
        "Diseño moderno y adaptable",
        "Optimización para dispositivos móviles",
        "Carga rápida y buen rendimiento",
        "Integración con redes sociales",
        "Formularios y medios de contacto",
        "Optimización básica para buscadores",
      ],
      button: "Conocer más",
    },
    {
      number: "02",
      title: "Aplicaciones Móviles",
      image: appsMovil,
      description:
        "Desarrollamos aplicaciones móviles pensadas para ofrecer experiencias simples, rápidas y funcionales a tus usuarios.",
      features: [
        "Aplicaciones para Android y iOS",
        "Interfaces intuitivas",
        "Diseño adaptado a dispositivos móviles",
        "Integración con servicios externos",
        "Autenticación de usuarios",
        "Notificaciones y funcionalidades personalizadas",
      ],
      button: "Conocer más",
    },
    {
      number: "03",
      title: "Software a la Medida",
      image: servicioSaaS,
      description:
        "Construimos herramientas digitales adaptadas a los procesos reales de tu empresa para ayudarte a trabajar de forma más eficiente.",
      features: [
        "Sistemas personalizados",
        "Automatización de procesos",
        "Paneles administrativos",
        "Gestión de usuarios y permisos",
        "Bases de datos y reportes",
        "Soluciones SaaS",
      ],
      button: "Conocer más",
    },
  ];

  return (
    <section className="services">
      <div className="services-header">
        <span className="services-eyebrow">LO QUE HACEMOS</span>

        <h1 className="sr-only">Nuestros Servicios</h1>

        <ScrollFloat>
          Soluciones digitales para hacer crecer tu negocio.
        </ScrollFloat>

        <p>
          Desarrollamos tecnología pensada para las necesidades reales de cada
          proyecto.
        </p>
      </div>

      <div className="services-container">
        {services.map((service, index) => (
          <article
            className={`service ${index % 2 !== 0 ? "service-reverse" : ""}`}
            key={service.number}
          >
            <div className="service-visual">
              <span className="service-number, sr-only">{service.number}</span>

              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
            </div>

            <div className="service-content">
              <span className="service-label">{}SERVICIO </span>

              <ScrollFloat>{service.title}</ScrollFloat>

              <p className="service-description">{service.description}</p>

              <div className="service-features">
                {service.features.map((feature) => (
                  <div className="service-feature" key={feature}>
                    <span className="feature-icon">+</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className="service-button">
                {service.button}
                <span>↗</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
