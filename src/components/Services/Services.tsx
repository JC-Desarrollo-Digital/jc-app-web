import "./Services.css";

import paginasWeb from "../../assets/servicios/jc-paginasweb.webp";
import appsMovil from "../../assets/servicios/jc-appsmovil.webp";
import servicioSaaS from "../../assets/servicios/jc-serviciosaas.webp";


const Services = () => {

  const services = [
    {
      image: paginasWeb,
      title: "Desarrollo Web",
      description:
        "Creamos páginas web modernas, rápidas y adaptadas a las necesidades de cada negocio."
    },
    {
      image: appsMovil,
      title: "Aplicaciones Móviles",
      description:
        "Desarrollamos aplicaciones móviles intuitivas para mejorar la experiencia de los usuarios."
    },
    {
      image: servicioSaaS,
      title: "Software a la Medida",
      description:
        "Diseñamos soluciones SaaS y sistemas personalizados para optimizar los procesos de tu empresa."
    }
  ];


  return (

    <section className="services">

      <div className="services-header">

        <h2>
          Nuestros Servicios
        </h2>

        <p>
          Soluciones tecnológicas para impulsar tu negocio.
        </p>

      </div>


      <div className="services-container">

        {
          services.map((service, index) => (

            <div 
              className="service-card" 
              key={index}
            >

              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />


              <div className="service-content">

                <h3>
                  {service.title}
                </h3>


                <p>
                  {service.description}
                </p>


                <button>
                  Conocer más
                </button>

              </div>


            </div>

          ))
        }

      </div>


    </section>

  );

};


export default Services;