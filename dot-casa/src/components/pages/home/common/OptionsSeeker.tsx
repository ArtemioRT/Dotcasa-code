export const OptionsSeeker = () => {
  return (
    <div className="options-seeker">
      <div className="options-header">
        <h3>Residencial</h3>
        <h3>Comercial</h3>
        <h3>Industrial</h3>
      </div>
      <div className="options">
        <div className="options-row">
          <div className="options-icon">
            <div className="icon"></div>
            <p>Casa</p>
          </div>
          <div className="options-icon">
            <div className="icon"></div>
            <p>Departamento</p>
          </div>
        </div>
        <div className="options-row">
          <div className="options-icon">
            <div className="icon"></div>
            <p>Terreno</p>
          </div>
          <div className="options-icon">
            <div className="icon"></div>
            <p>Rancho</p>
          </div>
        </div>
        <div className="options-row">
          <div className="options-icon">
            <div className="icon"></div>
            <p>Cabaña</p>
          </div>
          <div className="options-icon">
            <div className="icon"></div>
            <p>Quinta</p>
          </div>
        </div>
      </div>
    </div>
  );
};
