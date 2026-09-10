import { useState } from 'react'
import { usePropiedadesRecientes } from '../../../../hooks/usePropiedadesRecientes'
import {
  formatDireccion,
  formatOperacion,
  formatPrecio,
  getFotos,
} from '../../../../utils/propiedad'
import type { PropiedadRow } from '../../../../types/models'

const POR_PAGINA = 4

function PropertyCard({ propiedad }: { propiedad: PropiedadRow }) {
  const fotos = getFotos(propiedad) // máximo 5
  const [indice, setIndice] = useState(0)
  const foto = fotos[indice]
  const hayVarias = fotos.length > 1

  // Circular: de la última pasa a la primera y al revés.
  const anterior = () => setIndice((i) => (i - 1 + fotos.length) % fotos.length)
  const siguiente = () => setIndice((i) => (i + 1) % fotos.length)

  return (
    <div className="property-card">
      <div
        className="image-property"
        style={foto ? { backgroundImage: `url(${foto})` } : undefined}
      >
        <div>
          <h3>{formatOperacion(propiedad.tipo_de_operacion)}</h3>
        </div>

        {hayVarias && (
          <>
            <button
              type="button"
              className="photo-arrow photo-arrow-left"
              aria-label="Foto anterior"
              onClick={anterior}
            >
              <img src="/img/icons/left_arrow.svg" alt="" aria-hidden="true" />
            </button>

            <button
              type="button"
              className="photo-arrow photo-arrow-right"
              aria-label="Foto siguiente"
              onClick={siguiente}
            >
              <img src="/img/icons/right_arrow.svg" alt="" aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      <div className="property-desc">
        <h3>{formatPrecio(propiedad.precio)}</h3>

        <div className="img-txt">
          <img src="/img/icons/loc_icon.svg" alt="Icono de símbolo de ubicación" />
          <p>{formatDireccion(propiedad)}</p>
        </div>

        <div className="txt-property">
          <p>{propiedad.colonia ?? propiedad.ciudad ?? ''}</p>
        </div>

        <div className="stats-container">
          {propiedad.n_habitaciones != null && (
            <div>
              <img src="/img/icons/hab_icon.svg" alt="Icono de un edificio" />
              <h3>{propiedad.n_habitaciones} hab</h3>
            </div>
          )}
          {propiedad.n_camas != null && (
            <div>
              <img src="/img/icons/bed_icon.svg" alt="Icono de una cama" />
              <h3>{propiedad.n_camas} camas</h3>
            </div>
          )}
          {propiedad.n_banos && (
            <div>
              <img src="/img/icons/bath_icon.svg" alt="Icono de baño" />
              <h3>{propiedad.n_banos} baños</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export const PropertySection = () => {
  const { propiedades, loading, error } = usePropiedadesRecientes(POR_PAGINA)

  return (
    <section className="property-section">
      <div className="property-title">
        <h3>Propiedades añadidas recientemente</h3>

        <div className="pagintator-component">
          <img src="/img/icons/left_arrow.svg" alt="Icono de flecha izquierda" />
          <h3 className="selected-page">1</h3>
          <h3>2</h3>
          <h3>3</h3>
          <h3>4</h3>
          <h3>5</h3>
          <img src="/img/icons/right_arrow.svg" alt="Icono de flecha derecha" />
        </div>
      </div>

      <section className="card-container">
        {loading && <p>Cargando propiedades…</p>}

        {error && <p>No se pudieron cargar las propiedades: {error.message}</p>}

        {!loading && !error && propiedades.length === 0 && (
          <p>No hay propiedades activas por ahora.</p>
        )}

        {propiedades.map((p) => (
          <PropertyCard key={p._id} propiedad={p} />
        ))}
      </section>
    </section>
  )
}