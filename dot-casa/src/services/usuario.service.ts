import { supabase } from '../lib/supabase'
import type { UserRow } from '../types/models'

/** Fila de public."user" del usuario logueado (RLS solo deja ver la suya). */
export async function getMiUsuario(): Promise<UserRow | null> {
  const { data, error } = await supabase.from('user').select('*').maybeSingle()
  if (error) throw error
  return data
}

/**
 * Traduce el uuid de auth al _id de texto que usan todas las FKs.
 * Es la misma función que usan las policies.
 *
 * Devuelve null si el usuario no tiene auth_id vinculado: eso significa
 * que el trigger link_auth_user no corrió o falló el backfill.
 */
export async function getCurrentUserId(): Promise<string | null> {
  const { data, error } = await supabase.rpc('current_user_id')
  if (error) throw error
  return data ?? null
}

/** Fuente de verdad de "es agente": la misma que evalúa el servidor. */
export async function puedePublicar(): Promise<boolean> {
  const { data, error } = await supabase.rpc('puede_publicar')
  if (error) throw error
  return data === true
}

export async function esMiembroDe(inmobiliariaId: string): Promise<boolean> {
  const { data, error } = await supabase.rpc('es_miembro', { p_inmo: inmobiliariaId })
  if (error) throw error
  return data === true
}

export async function esAdminDe(inmobiliariaId: string): Promise<boolean> {
  const { data, error } = await supabase.rpc('es_admin_inmo', { p_inmo: inmobiliariaId })
  if (error) throw error
  return data === true
}