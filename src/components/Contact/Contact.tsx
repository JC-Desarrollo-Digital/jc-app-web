import { useState } from "react";
import "./Contact.css";
import ColorBends from "../react-bits/Background/ColorBends/ColorBends";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const whatsappMessage = `
Hola JC Desarrollo Digital.

Me interesa solicitar información sobre un proyecto.

*Nombre:* ${formData.nombre}
*Correo:* ${formData.correo}
*Teléfono:* ${formData.telefono || "No proporcionado"}

*Proyecto:*
${formData.mensaje}
    `.trim();

    const whatsappUrl = `https://wa.me/5215544475622?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="contact">
      <div className="contact-background">
        <ColorBends />
      </div>

      <div className="contact-header">
        <span className="contact-label">CONTACTO</span>

        <h2>
          Hablemos de
          <br />
          tu proyecto.
        </h2>

        <p>
          Cuéntanos qué tienes en mente.
          <br />
          Nosotros nos encargamos de convertirlo en una solución digital.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-field">
          <label htmlFor="nombre">Nombre</label>

          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact-field">
          <label htmlFor="correo">Correo electrónico</label>

          <input
            type="email"
            id="correo"
            name="correo"
            placeholder="tu@correo.com"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact-field">
          <label htmlFor="telefono">Teléfono</label>

          <input
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="Tu número de teléfono"
            value={formData.telefono}
            onChange={handleChange}
          />
        </div>

        <div className="contact-field contact-message">
          <label htmlFor="mensaje">Cuéntanos sobre tu proyecto</label>

          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="¿Qué necesitas? ¿Qué problema quieres resolver?"
            rows={4}
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="contact-button">
          Enviar proyecto
          <span>→</span>
        </button>
      </form>
    </section>
  );
}
