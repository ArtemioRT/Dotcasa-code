export const InmMain = () => {
  return (
    <section className="inm-main">
      <div className="inm-title-container">
        <h3>Inmobiliarias de confianza</h3>
      </div>
      <section className="inm-container">
        <div className="arrow-container">
          <img
            src="/img/icons/left_arrow_carrusel.svg"
            alt="Icono de flecha izquierda"
          />
        </div>
        <div>
          <img
            src="/img/icons/inm_icon.svg"
            alt="Icono de la inmobiliaria de confianza"
          />
          <h3>Bienes Raíces HERGO</h3>
        </div>
        <div>
          <img
            src="/img/icons/inm_icon.svg"
            alt="Icono de la inmobiliaria de confianza"
          />
          <h3>Industrial Monterrey</h3>
        </div>
        {/* <div className="none-border">
          <img
            src="/img/icons/inm_icon.svg"
            alt="Icono de la inmobiliaria de confianza"
          />
          <h3>Espacio Querido</h3>
        </div> */}
        <div className="arrow-container">
          <img
            src="/img/icons/right_arrow_carrusel.svg"
            alt="Icono de flecha derecha"
          />
        </div>
      </section>
    </section>
  );
};
