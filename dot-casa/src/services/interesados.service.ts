import { supabase } from '../lib/supabase'
import { assertFilasAfectadas } from '../utils/errors'
import type { InteresadoRow } from '../types/database'

export interface NuevoInteresado {
  propiedad: string
  nombre: string
  email: string
  telefono?: string
  intencion?: string
  canal?: string
}

/**
 * Funciona sin sesión: la policy int_insert acepta anon, siempre que la
 * propiedad esté publicada.
 *
 * OJO: al ser abierto es blanco de spam. RLS no protege contra volumen;
 * mete captcha o rate limit por IP en una Edge Function.
 */
export async function crearInteresado(datos: NuevoInteresado): Promise<void> {
  const { error } = await supabase.from('interesados').insert({
    _id: crypto.randomUUID(),
    ...datos,
    leido: false,
    respondido: false,
  })

  if (error) throw error
}

/** Leads que me tocan: como agente asignado o como staff. */
export async function getMisLeads(): Promise<InteresadoRow[]> {
  const { data, error } = await supabase
    .from('interesados')
    .select('*, propiedad:propiedades(_id, slug_text, ciudad, colonia, precio)')
    .order('created_date', { ascending: false })

  if (error) throw error
  return (data ?? []) as unknown as InteresadoRow[]
}

export async function marcarLeido(leadId: string): Promise<void> {
  const { data, error } = await supabase
    .from('interesados')
    .update({ leido: true })
    .eq('_id', leadId)
    .select('_id')

  assertFilasAfectadas(data, error, 'No puedes modificar este lead')
}