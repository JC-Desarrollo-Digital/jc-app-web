import "./Contact.css";

export default Contact;
function Contact() {
  return (
    <section className="contact">
      <h2>Contáctanos</h2>

      <form>
        <label>Nombre</label>
        <input type="text" placeholder="Ingresa tu nombre" />

        <label>Correo electrónico</label>
        <input type="email" placeholder="Ingresa tu correo" />

        <label>Teléfono</label>
        <input type="tel" placeholder="Ingresa tu teléfono" />

        <label>Ciudad</label>
        <input type="text" placeholder="Ingresa tu ciudad" />

        <button type="submit">Contáctanos</button>
      </form>
    </section>
  );
}