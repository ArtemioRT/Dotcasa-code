export const Profile = () => {
  return (
    <section className="profile">
      <div className="profile-container user-profile">
        <img
          src="/img/assets/sale_picture.png"
          alt="Ejemplo de una imagen de perfil"
        />
        <h2>@User-Name</h2>
        <h3>user@email.com</h3>
      </div>
      <div className="profile-container user-data">
        <div className="info-container">
          <div className="title-info-container">
            <h2>Información</h2>
          </div>
          <div className="row-txts">
            <h3>Nombre:</h3>
            <p>Name, Last Name</p>
          </div>
          <div className="row-txts">
            <h3>RFC/CURP: </h3>
            <p>NHC45178FP0</p>
          </div>
          <div className="row-txts id-row">
            <h3>ID:</h3>
            <p>51657815</p>
          </div>
          <div className="row-txts">
            <h3>Plan:</h3>
            <p>Hardcoded</p>
          </div>
        </div>
        <div className="info-container">
          <div className="title-info-container">
            <h2>Contacto</h2>
          </div>
          <div className="row-txts">
            <h3>Email:</h3>
            <p>user@email.com</p>
          </div>
          <div className="row-txts">
            <h3>Tel:</h3>
            <p>+52 966 696 123</p>
          </div>
        </div>
        <div className="info-container">
          <div className="title-info-container">
            <h2>Contacto</h2>
          </div>
          <div className="row-txts">
            <h3>Plan:</h3>
            <p>Hardcoded</p>
          </div>
          <div className="row-txts">
            <h3>Tipo de cuenta:</h3>
            <p>Hardcoded</p>
          </div>
          <div className="row-txts checkbox-container">
            <label className="dot-checkbox">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <p>Permitir contacto por WhatsApp</p>
          </div>
        </div>
      </div>
    </section>
  );
};
