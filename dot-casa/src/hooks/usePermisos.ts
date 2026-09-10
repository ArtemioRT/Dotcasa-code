import { useMemo } from 'react'
import { useAuth } from '../context/AuthContext'
import type { PropiedadRow } from '../types/database'

/**
 * Permisos para la UI: mostrar u ocultar botones.
 *
 * ESTO NO ES SEGURIDAD. La seguridad real está en las policies de RLS.
 * Aquí solo evitamos que el usuario vea acciones que van a fallar.
 */
export function usePermisos() {
  const { userId, puedePublicar, loading } = useAuth()

  return useMemo(
    () => ({
      loading,
      estaLogueado: userId != null,
      puedeCrearPropiedad: puedePublicar,

      puedeEditar: (p: Pick<PropiedadRow, 'agente' | 'created_by'>) =>
        userId != null && (p.agente === userId || p.created_by === userId),

      puedeEliminar: (p: Pick<PropiedadRow, 'agente' | 'created_by'>) =>
        userId != null && (p.agente === userId || p.created_by === userId),
    }),
    [userId, puedePublicar, loading],
  )
}