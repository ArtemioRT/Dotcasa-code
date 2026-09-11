export const Login = () => {
  return (
    <section className="auth-screen">
      <section className="input-container">
        <header className="header-containers">
          <img
            src="/img/icons/header_icon.svg"
            alt="Imagen del icono de login"
          />
          <h3>Iniciar sesión</h3>
        </header>
        <div className="row-input-container">
          <div className="input-label-container">
            <p>Correo electrónico</p>
            <input type="email" />
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
        <div className="border-container">
          <div className="row-txts checkbox-container p-font-size">
            <label className="dot-checkbox">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <p>Recuérdame</p>
          </div>
          <h3>¿Olvidaste tu contraseña?</h3>
        </div>
        <button className="login-btn">Continuar</button>
        <button className="g-login-btn">
          <img
            src="/img/icons/g-icons.svg"
            alt="Imagen del logotipo de Google"
          />
          Continuar con google
        </button>
        <div className="border-container">
          <h3 className="light-txt">¿No estas registrado? </h3>
          <h3>Crear cuenta</h3>
        </div>
      </section>
    </section>
  );
};
