import { supabase } from '../lib/supabase'
import { assertFilasAfectadas } from '../utils/errors'
import type { PerfilPublicoRow, PerfilRow } from '../types/database'

/**
 * Perfil público de un agente (ficha de propiedad, directorio).
 * Usa la VISTA: la tabla perfil trae curp, rfc y fecha de nacimiento,
 * que no deben salir al navegador.
 */
export async function getPerfilPublico(perfilId: string): Promise<PerfilPublicoRow | null> {
  const { data, error } = await supabase
    .from('perfil_publico')
    .select('*')
    .eq('_id', perfilId)
    .maybeSingle()

  if (error) throw error
  return data
}

/** Mi propio perfil, con todos los campos. */
export async function getMiPerfil(usuarioId: string): Promise<PerfilRow | null> {
  const { data, error } = await supabase
    .from('perfil')
    .select('*')
    .eq('usuario', usuarioId)
    .maybeSingle()

  if (error) throw error
  return data
}

export async function actualizarMiPerfil(
  perfilId: string,
  cambios: Partial<PerfilRow>,
): Promise<PerfilRow> {
  const { data, error } = await supabase
    .from('perfil')
    .update(cambios)
    .eq('_id', perfilId)
    .select()

  return assertFilasAfectadas(data, error, 'No puedes editar este perfil')[0]
}