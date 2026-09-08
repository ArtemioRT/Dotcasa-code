export const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-form">
        <h2>Tu próximo gran movimiento está a un clic</h2>
        <h3>¿Empezamos?</h3>
        <div className="contact-info-container">
          <div className="contact-info">
            <input type="text" />
            <button>Registrar</button>
          </div>
          <ul>
            <h3>Registra tu correo y recibe antes que nadie:</h3>
            <div>
              <li>
                <span>Propiedades exclusivas</span> seleccionadas por expertos
              </li>
              <li>
                <span>Oportunidades únicas</span> de inversión
              </li>
              <li>
                <span>Espacios que no verás</span> en ningún otro lugar.
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="contact-picture"></div>
    </section>
  );
};
