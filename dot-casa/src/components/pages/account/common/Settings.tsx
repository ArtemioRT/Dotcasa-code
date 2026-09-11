export const Settings = () => {
  return (
    <section className="settings">
      <h3>Configuración del usuarios</h3>
      <div className="column-container">
        <h3>Información general</h3>
        <div className="row-input-container">
          <div className="input-label-container">
            <p>Nombre completo</p>
            <input value={"Name"} type="text" />
          </div>
          <div className="input-label-container">
            <p>Fecha de nacimiento</p>
            <input value={"Date of birth"} type="text" />
          </div>
        </div>
        <div className="row-input-container">
          <div className="input-label-container">
            <p>Email</p>
            <input value={"user@email.com"} type="text" />
          </div>
          <div className="input-label-container">
            <p>Número de teléfono</p>
            <input value={"+52 966 696 123"} type="text" />
          </div>
        </div>
        <div className="row-input-container">
          <div className="input-label-container">
            <p>Dirección</p>
            <input value={"Dirección"} type="text" />
          </div>
          <div className="input-label-container">
            <p>Código Postal</p>
            <input value={"CP"} type="text" />
          </div>
        </div>
        <div className="row-input-container">
          <div className="input-label-container">
            <p>Colonia</p>
            <input value={"Colonia"} type="text" />
          </div>
          <div className="input-label-container">
            <p>Estado</p>
            <input value={"Estado"} type="text" />
          </div>
        </div>
        <div className="row-input-container">
          <div className="input-label-container ineditable-data">
            <h3>RFC</h3>
            <p>NHC45178FP0</p>
          </div>
        </div>
      </div>
      {/* Perfil profesional section */}
      <div className="column-container">
        <h3>Perfil profesional</h3>
        <div className="row-input-container">
          <div className="input-label-container">
            <p>Años de experiencia</p>
            <input value={"Años de experiencia"} type="text" />
          </div>
          <div className="input-label-container">
            <p>Especialización</p>
            <input value={"Especialización"} type="text" />
          </div>
        </div>
        <div className="row-input-container">
          <div className="input-label-container">
            <p>Nombre de despacho</p>
            <input value={"Nombre de despacho"} type="text" />
          </div>
          <div className="input-label-container">
            <p>Dirección de despacho</p>
            <input value={"Dirección de despacho"} type="text" />
          </div>
        </div>
        <div className="row-input-container">
          <div className="input-label-container">
            <p>Certificaciones</p>
            <input value={"Certificaciones"} type="text" />
          </div>
          <div className="input-label-container">
            <p>Étiquetas</p>
            <input value={"Étiquetas"} type="text" />
          </div>
        </div>
        <div className="row-input-container">
          <div className="input-label-container label-complete">
            <p>Clave de asesor</p>
            <input value={"Clave de asesor"} type="text" />
          </div>
        </div>
        <div className="btn-container">
          <button>Guardar cambios</button>
        </div>
      </div>
      {/* Seccion para cambiar la password */}
      <div className="column-container">
        <h3>Contraseña</h3>
        <div className="row-input-container">
          <div className="input-label-container label-complete">
            <p>Cambiar contraseña</p>
            <input type="text" />
          </div>
        </div>
        <div className="row-input-container">
          <div className="input-label-container label-complete">
            <p>Nueva contraseña</p>
            <input type="text" />
          </div>
        </div>
        <div className="btn-container">
          <button>Guardar cambios</button>
          <button className="forget-password">¿Olvidaste tu contraseña?</button>
        </div>
      </div>
    </section>
  );
};
