export const Invite = () => {
  return (
    <section className="auth-screen register-screen invite">
      <section className="input-container register-auth">
        <header className="header-containers">
          <img
            src="/img/icons/user_plus_icon.svg"
            alt="Imagen del icono de login"
          />
          <h3>Fuiste invitado a unirse a Dotcasa</h3>
        </header>

        <div className="row-input-container">
          <div className="input-label-container">
            <p>Correo electrónico</p>
            <input type="text" />
          </div>

          <div className="input-label-container">
            <p>Contraseña</p>
            <div className="input-icon">
              <input className="no-borders" type="password" />
              <img
                src="/img/icons/eye_show.svg"
                alt="Imagen para mostrar la contraseña u ocultarla"
              />
            </div>
          </div>
        </div>

        <button className="login-btn">Continuar</button>
        <button className="g-login-btn">
          <img
            src="/img/icons/g-icons.svg"
            alt="Imagen del logotipo de Google"
          />
          Continuar con google
        </button>
      </section>
      <section className="picture-auth"></section>
    </section>
  );
};
