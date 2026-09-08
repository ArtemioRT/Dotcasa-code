export const MobileMenuNav = () => {
  return (
    <>
      <section className="menu-overlay">
        <section className="desktop-menu ">
          <div className="desktop-menu-header">
            <img
              src="/img/icons/menu_icon.svg"
              alt="Icono para desplegar menú"
            />
            <p>Menú principal</p>
          </div>
          <div className="desktop-menu-profile">
            <img
              src="/img/assets/profile_menu_default.svg"
              alt="Imagen de perfil del usuario"
            />
            <p className="profile-txt">
              Hola, <span>Artemio Rivera</span>
            </p>
          </div>
          <div className="menu-content ">
            <div className="menu-item item-active">
              <img
                src="/img/icons/home_icon_active.svg"
                alt="Icono de inicio"
              />
              <p>Inicio</p>
            </div>
            <div className="menu-item">
              <img
                src="/img/icons/mis_avisos_inactive.svg"
                alt="Icono de mis avisos"
              />
              <p>Mis avisos</p>
            </div>
            <div className="menu-item">
              <img
                src="/img/icons/mis_interesados_inactive.svg"
                alt="Icono de mis interesados"
              />
              <p>Mis interesados</p>
            </div>
            <div className="menu-item">
              <img
                src="/img/icons/mi_actividad_inactive.svg"
                alt="Icono de mi actividad"
              />
              <p>Mi actividad </p>
            </div>
            <div className="menu-item">
              <img
                src="/img/icons/m_inmobiliaria_inactive.svg"
                alt="Icono de mi inmobiliaria"
              />
              <p>Mi inmobiliaria</p>
            </div>
            <div className="menu-item">
              <img
                src="/img/icons/mis_estadisticas_inactive.svg"
                alt="Icono de mis estadisticas"
              />
              <p>Mis estadísticas</p>
            </div>
            <div className="menu-item">
              <img src="/img/icons/mi_cuenta_inactive.svg" alt="" />
              <p>Mi cuenta</p>
            </div>
            {/* <div className="menu-item">
              <img src="" alt="" />
              <p>Blog</p>
            </div> */}
            <div className="menu-item menu-border-none">
              <img src="/img/icons/help_inactive.svg" alt="" />
              <p>Ayuda</p>
            </div>
          </div>
          <div className="log-out">
            <img src="img/icons/log_out.svg" alt="Imagen de logout" />
            <p>Cerrar sesión</p>
          </div>
        </section>
      </section>
    </>
  );
};
