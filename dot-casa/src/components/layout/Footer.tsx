export const Footer = () => {
  return (
    <footer>
      <section className="content">
        <div className="logo-footer">
          <img
            src="/img/icons/logo_footer.svg"
            alt="Imagen del logo de dotcasa"
          />
          <h3>Encuentra tu lugar alrededor del mundo</h3>
        </div>
        <div className="txt-footer">
          <h3>Enlaces rápidos</h3>
          <p>Nosotros</p>
          <p>Términos y condiciones</p>
          <p>Política de privacidad</p>
          <p>Página principal</p>
        </div>
        <div className="txt-footer">
          <h3>Contáctanos</h3>
          <p>contacto@dotcasa.com.mx</p>
          <p>+52 81 2381 1257</p>
        </div>
        <div className="net-container">
          <h3>Síguenos en redes</h3>
          <div className="network">
            <img
              src="/img/icons/fb_icon.svg"
              alt="Imagen del logo de facebook"
            />
            <img
              src="/img/icons/insta_icon.svg"
              alt="Imagen del logo de instagram"
            />
            <img
              src="/img/icons/lk_icon.svg"
              alt="Imagen del logo de linkedin"
            />
          </div>
        </div>
      </section>
      <section className="sec-footer">
        <h3>@Copyright Dotcasa 2026</h3>
      </section>
    </footer>
  );
};
