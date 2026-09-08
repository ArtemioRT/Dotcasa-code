// import { DesktopMenuNav } from "./DesktopMenuNav";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li className="logo">
          <img src="/img/assets/logo_nav.svg" alt="Logo de la empresa" />
        </li>
        <div className="nav-section">
          <li>Inicio</li>
          <li>Mi actividad</li>
          <li>Mis interesados</li>
          <li>Mis avisos</li>
          <li>Bolsa inmobiliaria</li>
        </div>
        <div className="menu-section">
          <li>
            <button className="log-in">Iniciar sesión</button>
          </li>
          <li>
            <button className="p-property">Publica tu propiedad</button>
          </li>
          <li className="i-button relative-li">
            <button className="user-profile">
              <img
                src="/img/assets/icon_user.svg"
                alt="Imagen de perfil del usuario"
              />
            </button>
            {/* <DesktopMenuNav /> */}
          </li>
          <li className="i-button">
            <button>
              <img
                src="/img/icons/noti_icon.svg"
                alt="Imagen de notificaciones"
              />
            </button>
          </li>
          <li className="i-button">
            <button>
              <img src="/img/icons/search_icon.svg" alt="Imagen de búsqueda" />
            </button>
          </li>
          <li className="search-input">
            <div>
              <img
                src="/img/icons/search_input.svg"
                alt="Imagen de entrada de búsqueda"
              />
              <input type="text" placeholder="Buscar" />
            </div>
          </li>
        </div>
      </ul>
    </nav>
  );
};
