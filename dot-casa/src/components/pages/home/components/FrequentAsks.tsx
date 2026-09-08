export const FrequentAsks = () => {
  return (
    <section className="frequent-asks">
      <div className="asks-title-container">
        <h3>Preguntas frecuentes</h3>
      </div>
      <div className="ask">
        <div className="ask-txts active">
          <h3>¿Cuánto cuesta publicar propiedades en DotCasa?</h3>
          <p>
            DotCasa ofrece planes flexibles desde $499 MXN por propiedad activa
            al mes, con descuentos conforme aumenta el volumen de publicaciones.
          </p>
        </div>
        <img src="/img/icons/less_icon.svg" alt="Icono del símbolo de -" />
      </div>
      <div className="ask">
        <div className="ask-txts">
          <h3>
            ¿Puedo publicar propiedades si soy particular o solo para
            inmobiliarias?
          </h3>
          {/* <p>
                DotCasa ofrece planes flexibles desde $499 MXN por propiedad
                activa al mes, con descuentos conforme aumenta el volumen de
                publicaciones.
              </p> */}
        </div>
        <img src="/img/icons/plus_ask_icon.svg" alt="Icono del símbolo de +" />
      </div>
    </section>
  );
};
