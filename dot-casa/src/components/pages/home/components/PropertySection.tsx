export const PropertySection = () => {
  return (
    <section className="property-section">
      <div className="property-title">
        <h3>Propiedades añadidas recientemente</h3>
        <div className="pagintator-component">
          <img
            src="/img/icons/left_arrow.svg"
            alt="Icono de flecha izquierda"
          />
          <h3 className="selected-page">1</h3>
          <h3>2</h3>
          <h3>3</h3>
          <h3>4</h3>
          <h3>5</h3>
          <img src="/img/icons/right_arrow.svg" alt="Icono de flecha derecha" />
        </div>
      </div>
      <section className="card-container">
        <div className="property-card">
          <div className="image-property">
            <div>
              <h3>En renta</h3>
            </div>
          </div>
          <div className="property-desc">
            <h3>$47,500.00 MXN</h3>

            <div className="img-txt">
              <img
                src="/img/icons/loc_icon.svg"
                alt="Icono de símbolo de ubicación"
              />
              <p>
                Av Constelaciones 109, Contry, 64860 Monterrey, N.L., México
              </p>
            </div>
            <div className="txt-property">
              <p>
                Av Constelaciones 109, Contry, 64860 Monterrey, N.L., México
              </p>
            </div>
            <div className="stats-container">
              <div>
                <img src="/img/icons/hab_icon.svg" alt="Icono de un edificio" />
                <h3>3 hab</h3>
              </div>
              <div>
                <img src="/img/icons/bed_icon.svg" alt="Icono de una cama" />
                <h3>3 hab</h3>
              </div>
              <div>
                <img src="/img/icons/bath_icon.svg" alt="Icono de baño" />
                <h3>2 baños</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
