export const ResetPassword = () => {
  return (
    <section className="reset-pw-container">
      <section className="r-pw-input-container">
        <h3>Actualizar contraseña</h3>
        <div className="input-r-pw-container">
          <div className="img-r-pw-container">
            <img src="/img/icons/padlock_icon.svg" alt="Icono de email" />
          </div>
          <div className="input-icon-reset-pw">
            <input type="password" />
            <img
              src="/img/icons/eye_show.svg"
              alt="Imagen para mostrar la contraseña u ocultarla"
            />
          </div>
        </div>
        <button>Enviar</button>
      </section>
    </section>
  );
};
