import type { PostgrestError } from '@supabase/supabase-js'

export class PermisoDenegadoError extends Error {
  constructor(mensaje = 'No tienes permiso para realizar esta acción') {
    super(mensaje)
    this.name = 'PermisoDenegadoError'
  }
}

/**
 * EL BUG MÁS COMÚN CON RLS.
 *
 * Un UPDATE o DELETE bloqueado por RLS no devuelve error: devuelve
 * "0 filas afectadas". supabase-js te da error = null y la UI diría
 * "eliminado con éxito" sin haber borrado nada.
 *
 * Por eso todo update/delete lleva .select() y pasa por aquí.
 */
export function assertFilasAfectadas<T>(
  data: T[] | null,
  error: PostgrestError | null,
  mensaje?: string,
): T[] {
  if (error) throw error
  if (!data || data.length === 0) throw new PermisoDenegadoError(mensaje)
  return data
}

export function unwrap<T>(data: T | null, error: PostgrestError | null): T {
  if (error) throw error
  if (data === null) throw new Error('Sin resultados')
  return data
}