import "./Services.css";

const Services = () => {

  const services = [
    {
      icon: "🌐",
      title: "Desarrollo Web",
      description:
        "Creamos sitios web modernos, funcionales y adaptados a las necesidades de cada negocio."
    },
    {
      icon: "📱",
      title: "Aplicaciones Móviles",
      description:
        "Desarrollamos aplicaciones móviles intuitivas para mejorar la experiencia de los usuarios."
    },
    {
      icon: "⚙️",
      title: "Software a la Medida",
      description:
        "Diseñamos sistemas personalizados que se adaptan a los procesos y objetivos de tu empresa."
    }
  ];

  return (
    <section className="services">

      <h2>Nuestros Servicios</h2>

      <div className="services-container">

        {services.map((service, index) => (
          <div className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Services;