import type { Json } from '../types/database'
import type { PropiedadRow } from '../types/models'

export const MAX_FOTOS = 5

/**
 * Las columnas de fotos son jsonb heredado de Bubble, así que el formato
 * real puede variar: arreglo de strings, arreglo de objetos con .url, o
 * un solo string. Esto normaliza los tres casos.
 */
function normalizarUrls(valor: Json | null): string[] {
  if (!valor) return []

  if (typeof valor === 'string') return [valor]

  if (Array.isArray(valor)) {
    return valor
      .map((item) => {
        if (typeof item === 'string') return item
        if (item && typeof item === 'object' && !Array.isArray(item)) {
          const o = item as Record<string, Json>
          const url = o.url ?? o.URL ?? o.src ?? o.href
          return typeof url === 'string' ? url : null
        }
        return null
      })
      .filter((u): u is string => !!u)
  }

  if (typeof valor === 'object') {
    return Object.values(valor as Record<string, Json>).filter(
      (v): v is string => typeof v === 'string',
    )
  }

  return []
}

/** Máximo 5 fotos. Prefiere las que ya tienen marca de agua. */
export function getFotos(p: PropiedadRow, max = MAX_FOTOS): string[] {
  const conMarca = normalizarUrls(p.url_fotografia_lugar_con_marca_de_agua)
  const fotos = conMarca.length > 0 ? conMarca : normalizarUrls(p.url_fotografia_lugar)

  return fotos
    .map((u) => (u.startsWith('//') ? `https:${u}` : u)) // Bubble guarda //s3...
    .slice(0, max)
}

const fmt = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN',
  minimumFractionDigits: 2,
})

export function formatPrecio(precio: number | null): string {
  if (precio == null) return 'Precio a consultar'
  return `${fmt.format(precio)} MXN`
}

export function formatOperacion(op: string | null): string {
  if (!op) return ''
  const l = op.toLowerCase()
  if (l.includes('renta')) return 'En renta'
  if (l.includes('venta')) return 'En venta'
  return op
}

export function formatDireccion(p: PropiedadRow): string {
  return [p.colonia, p.ciudad, p.estado].filter(Boolean).join(', ') || 'Ubicación no disponible'
}