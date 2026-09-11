export const SendResetPassword = () => {
  return (
    <section className="reset-pw-container">
      <section className="r-pw-input-container">
        <h3>Solicitar restablecimiento de contraseña</h3>
        <div className="input-r-pw-container">
          <div className="img-r-pw-container">
            <img src="/img/icons/email_icon.svg" alt="Icono de email" />
          </div>
          <input type="text" placeholder="Email" />
        </div>
        <button>Enviar</button>
      </section>
    </section>
  );
};
