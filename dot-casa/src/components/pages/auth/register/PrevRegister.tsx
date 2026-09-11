export const PrevRegister = () => {
  return (
    <section className="prev-register">
      <section className="prev-register-card-container">
        <header className="header-containers">
          <img
            src="/img/icons/prev-register-icon.svg"
            alt="Imagen del icono de login"
          />
          <h3>¿Con qué perfil te identificas?</h3>
        </header>
        <div className="border-container card-border-conatiner">
          <div className="card">
            <img
              src="/img/assets/part-prev-icon.svg"
              alt="Imagen de tipo de cuenta particular"
            />
            <h3>Particular</h3>
          </div>
          <div className="card">
            <img
              src="/img/assets/a-ind-prev-icon.svg"
              alt="Imagen de tipo de cuenta particular"
            />
            <h3>Agente independiente</h3>
          </div>
          <div className="card">
            <img
              src="/img/assets/inm-prev-icon.svg"
              alt="Imagen de tipo de cuenta particular"
            />
            <h3>Inmobiliaria</h3>
          </div>
        </div>
      </section>
    </section>
  );
};
