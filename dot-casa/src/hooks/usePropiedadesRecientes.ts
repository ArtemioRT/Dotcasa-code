import { useEffect, useState } from 'react'
import { getPropiedadesRecientes } from '../services/propiedades.service'
import type { PropiedadRow } from '../types/models'

export function usePropiedadesRecientes(limite = 4) {
  const [propiedades, setPropiedades] = useState<PropiedadRow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let cancelado = false

    getPropiedadesRecientes(limite)
      .then((data) => {
        if (!cancelado) setPropiedades(data)
      })
      .catch((e: Error) => {
        if (!cancelado) setError(e)
      })
      .finally(() => {
        if (!cancelado) setLoading(false)
      })

    return () => {
      cancelado = true
    }
  }, [limite])

  return { propiedades, loading, error }
}