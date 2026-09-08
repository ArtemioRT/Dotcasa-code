export const HighlightsSection = () => {
  return (
    <section className="highlights-sections">
      <div className="highlights-txts">
        <h3>Destacados</h3>
      </div>
      <div className="highlights-cards">
        <div className="highlights-card">
          <img
            src="/img/assets/sale_picture.png"
            alt="Imagen de portada de venta"
          />
          <div>
            <h3>Venta</h3>
            <div className="row-txts">
              <div>
                <p className="txts-title">Monterrey</p>
                <p className="txts-parr">Casas en venta en Monterrey</p>
                <p className="txts-parr">Departamentos en venta en Monterrey</p>
              </div>
              <div>
                <p className="txts-title">San Pedro Garza García</p>
                <p className="txts-parr">
                  Casas en venta en San Pedro Garza García
                </p>
                <p className="txts-parr">
                  Departamentos en venta en San Pedro Garza García
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="highlights-card">
          <img
            src="/img/assets/rent_picture.jpg"
            alt="Imagen de portada de renta"
          />
          <div>
            <h3>Renta</h3>
            <div className="row-txts">
              <div>
                <p className="txts-title">Monterrey</p>
                <p className="txts-parr">Casas en renta en Monterrey</p>
                <p className="txts-parr">Departamentos en renta en Monterrey</p>
              </div>
              <div>
                <p className="txts-title">San Pedro Garza García</p>
                <p className="txts-parr">
                  Casas en renta en San Pedro Garza García
                </p>
                <p className="txts-parr">
                  Departamentos en renta en San Pedro Garza García
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
