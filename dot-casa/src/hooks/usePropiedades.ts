import { useCallback, useEffect, useState } from 'react'
import {
  buscarPropiedades,
  type FiltrosPropiedades,
} from '../services/propiedades.service'
import type { PropiedadRow } from '../types/database'

interface Estado {
  propiedades: PropiedadRow[]
  total: number
  loading: boolean
  error: Error | null
}

/**
 * Versión sin librerías. Si ya usas TanStack Query, cambia esto por
 * useQuery(['propiedades', filtros], () => buscarPropiedades(filtros))
 * y te ahorras el manejo de estado.
 */
export function usePropiedades(filtros: FiltrosPropiedades = {}) {
  const [estado, setEstado] = useState<Estado>({
    propiedades: [],
    total: 0,
    loading: true,
    error: null,
  })

  const key = JSON.stringify(filtros)

  const cargar = useCallback(async () => {
    setEstado((s) => ({ ...s, loading: true, error: null }))
    try {
      const { propiedades, total } = await buscarPropiedades(JSON.parse(key))
      setEstado({ propiedades, total, loading: false, error: null })
    } catch (e) {
      setEstado((s) => ({ ...s, loading: false, error: e as Error }))
    }
  }, [key])

  useEffect(() => {
    void cargar()
  }, [cargar])

  return { ...estado, recargar: cargar }
}