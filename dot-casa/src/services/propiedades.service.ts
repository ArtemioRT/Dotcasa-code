import { supabase } from '../lib/supabase'
import { assertFilasAfectadas } from '../utils/errors'
import type { PropiedadRow } from '../types/database'

export interface FiltrosPropiedades {
  ciudad?: string
  colonia?: string
  operacion?: string
  tipo?: string
  precioMin?: number
  precioMax?: number
  habitaciones?: number
  pagina?: number
  porPagina?: number
}

const CAMPOS_LISTA = `
  _id, slug_text, ciudad, colonia, estado, precio, destacado,
  tipo_de_inmueble, tipo_de_operacion, n_habitaciones, n_banos,
  m2_construccion, m2_terreno, latitud, longitud,
  url_fotografia_lugar_con_marca_de_agua, estatus
`

/**
 * Búsqueda pública. No filtra por estatus a propósito: RLS ya devuelve
 * solo publicadas al visitante. Un agente logueado recibe además las
 * suyas y las de su inmobiliaria, sin cambiar nada de este código.
 */
export async function buscarPropiedades(f: FiltrosPropiedades = {}) {
  const porPagina = f.porPagina ?? 20
  const pagina = f.pagina ?? 0

  let q = supabase
    .from('propiedades')
    .select(CAMPOS_LISTA, { count: 'exact' })
    .order('destacado', { ascending: false })
    .order('created_date', { ascending: false })
    .range(pagina * porPagina, (pagina + 1) * porPagina - 1)

  if (f.ciudad) q = q.eq('ciudad', f.ciudad)
  if (f.colonia) q = q.eq('colonia', f.colonia)
  if (f.operacion) q = q.eq('tipo_de_operacion', f.operacion)
  if (f.tipo) q = q.eq('tipo_de_inmueble', f.tipo)
  if (f.precioMin != null) q = q.gte('precio', f.precioMin)
  if (f.precioMax != null) q = q.lte('precio', f.precioMax)
  if (f.habitaciones != null) q = q.gte('n_habitaciones', f.habitaciones)

  const { data, error, count } = await q
  if (error) throw error
  return { propiedades: (data ?? []) as PropiedadRow[], total: count ?? 0 }
}

export async function getPropiedad(id: string): Promise<PropiedadRow | null> {
  const { data, error } = await supabase
    .from('propiedades')
    .select('*')
    .eq('_id', id)
    .maybeSingle()

  if (error) throw error
  return data
}

/** Mis propiedades, incluidos borradores (policy props_owner_read). */
export async function getMisPropiedades(usuarioId: string) {
  const { data, error } = await supabase
    .from('propiedades')
    .select(CAMPOS_LISTA)
    .or(`agente.eq.${usuarioId},created_by.eq.${usuarioId}`)
    .order('modified_date', { ascending: false })

  if (error) throw error
  return (data ?? []) as PropiedadRow[]
}

/** Catálogo completo de una inmobiliaria (policy props_inmo_read). */
export async function getPropiedadesDeInmobiliaria(inmobiliariaId: string) {
  const { data, error } = await supabase
    .from('propiedades')
    .select(CAMPOS_LISTA)
    .eq('inmobiliaria_id', inmobiliariaId)
    .order('modified_date', { ascending: false })

  if (error) throw error
  return (data ?? []) as PropiedadRow[]
}

/**
 * created_by lo pone Postgres solo (default current_user_id()), así que no
 * se manda desde aquí. Si el usuario es cliente, RLS rechaza el insert:
 * no hace falta validarlo en el frontend.
 */
export async function crearPropiedad(
  datos: Partial<PropiedadRow> & { agente: string },
): Promise<PropiedadRow> {
  const { data, error } = await supabase
    .from('propiedades')
    .insert({ ...datos, _id: crypto.randomUUID(), estatus: datos.estatus ?? 'borrador' })
    .select()
    .single()

  if (error) throw error
  return data
}

export async function actualizarPropiedad(
  id: string,
  cambios: Partial<PropiedadRow>,
): Promise<PropiedadRow> {
  const { data, error } = await supabase
    .from('propiedades')
    .update(cambios)
    .eq('_id', id)
    .select()

  return assertFilasAfectadas(data, error, 'No puedes editar esta propiedad')[0]
}

export async function publicarPropiedad(id: string) {
  return actualizarPropiedad(id, { estatus: 'publicada' })
}

export async function eliminarPropiedad(id: string): Promise<void> {
  const { data, error } = await supabase
    .from('propiedades')
    .delete()
    .eq('_id', id)
    .select('_id')

  assertFilasAfectadas(data, error, 'No puedes eliminar esta propiedad')
}

/**
 * Propiedades recientes para la home.
 *
 * No filtra por estatus: RLS ya devuelve solo las activas al visitante.
 * Si aquí no llega nada, el problema está en la policy o en es_publicada(),
 * no en este código.
 */
export async function getPropiedadesRecientes(limite = 4) {
  const { data, error } = await supabase
    .from('propiedades')
    .select(
      `_id, slug_text, ciudad, colonia, estado, precio, tipo_de_operacion,
       n_habitaciones, n_camas, n_banos, m2_construccion,
       url_fotografia_lugar, url_fotografia_lugar_con_marca_de_agua`,
    )
    .order('created_date', { ascending: false })
    .limit(limite)

  if (error) throw error
  return (data ?? []) as PropiedadRow[]
}