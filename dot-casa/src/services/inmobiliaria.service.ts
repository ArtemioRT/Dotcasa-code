import { supabase } from '../lib/supabase'
import { assertFilasAfectadas } from '../utils/errors'
import type { InmobiliariaRow, MiembroRow } from '../types/database'

export async function getInmobiliaria(id: string): Promise<InmobiliariaRow | null> {
  const { data, error } = await supabase
    .from('inmobiliaria')
    .select('*')
    .eq('_id', id)
    .maybeSingle()

  if (error) throw error
  return data
}

export async function listarInmobiliarias() {
  const { data, error } = await supabase
    .from('inmobiliaria')
    .select('_id, nombre, foto_empresa, telefono_principal, correo, locacion, especialidad')
    .order('nombre')

  if (error) throw error
  return (data ?? []) as InmobiliariaRow[]
}

/** Inmobiliarias donde soy staff (policy miembros_read). */
export async function getMisInmobiliarias(usuarioId: string) {
  const { data, error } = await supabase
    .from('miembros')
    .select('_id, rol, estado, inmobiliaria:inmobiliaria(_id, nombre, foto_empresa)')
    .eq('usuario', usuarioId)

  if (error) throw error
  return data ?? []
}

export async function getMiembros(inmobiliariaId: string): Promise<MiembroRow[]> {
  const { data, error } = await supabase
    .from('miembros')
    .select('*')
    .eq('inmobiliaria', inmobiliariaId)
    .order('created_date')

  if (error) throw error
  return data ?? []
}

/** Solo owner/admin pasa el RLS; el frontend no necesita revalidarlo. */
export async function invitarMiembro(
  inmobiliariaId: string,
  email: string,
  rol: string,
): Promise<MiembroRow> {
  const { data, error } = await supabase
    .from('miembros')
    .insert({
      _id: crypto.randomUUID(),
      inmobiliaria: inmobiliariaId,
      email: email.toLowerCase(),
      rol,
      estado: 'invitado',
      invitacion_estatus: 'pendiente',
    })
    .select()
    .single()

  if (error) throw error
  return data
}

export async function quitarMiembro(miembroId: string): Promise<void> {
  const { data, error } = await supabase
    .from('miembros')
    .delete()
    .eq('_id', miembroId)
    .select('_id')

  assertFilasAfectadas(data, error, 'No puedes quitar a este miembro')
}