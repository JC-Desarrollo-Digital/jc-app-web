import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <h2>Cuéntanos tu proyecto</h2>

      <form>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Ingresa tu nombre"
        />

        <label htmlFor="correo">Correo electrónico</label>
        <input
          type="email"
          id="correo"
          name="correo"
          placeholder="Ingresa tu correo"
        />

        <label htmlFor="telefono">Teléfono</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          placeholder="Ingresa tu teléfono"
        />

        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          placeholder="Cuéntanos qué necesitas o describe tu proyecto"
          rows={5}
          required
        />

        <button type="submit">Enviar Mensaje</button>
      </form>
    </section>
  );
}