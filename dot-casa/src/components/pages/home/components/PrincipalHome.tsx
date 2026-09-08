import { OptionsSeeker } from "../common/OptionsSeeker";

export const PrincipalHome = () => {
  return (
    <>
      <section className="principal-home">
        <div className="principal-texts">
          <h3>Encuentra el lugar que buscas</h3>
          <p>
            Explora las mejores propiedades del país. Tu nuevo hogar está a un
            clic de distancia.
          </p>
        </div>
        <div className="searcher-component">
          <div>
            <h3>¿Dónde?</h3>
            <p>Cualquier ubicación</p>
          </div>
          <div>
            <h3>¿Qué buscas?</h3>
            <p>Casa, departamento, terreno, etc.</p>
          </div>
          <div>
            <h3>¿Qué te interesa?</h3>
            <p>Venta, renta o preventa</p>
          </div>
          <div className="search-btn">
            <img
              src="/img/icons/search_icon_index.svg"
              alt="Imagen de un símbolo de búsqueda"
            />
          </div>
        </div>
      </section>

      <OptionsSeeker />
    </>
  );
};
