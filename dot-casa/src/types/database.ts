/**
 * RECOMENDADO: regenerar con el CLI en vez de mantener esto a mano:
 *   npx supabase gen types typescript --project-id <PROJECT_ID> > src/types/database.ts
 *
 * IMPORTANTE: supabase-js valida la forma de este tipo. Si a una tabla le
 * falta `Relationships`, o al schema le faltan `Enums` / `CompositeTypes`,
 * el cliente NO lanza un error claro: hace fallback a `never` y todos los
 * insert/update/rpc empiezan a fallar con "not assignable to type 'never'".
 */

export type Json = string | number | boolean | null | { [k: string]: Json } | Json[]

// ---------------------------------------------------------------------------
// Filas
// ---------------------------------------------------------------------------

interface User {
  _id: string
  auth_id: string | null
  email: string | null
  perfil: string | null // null = cliente, con valor = agente
  user_signed_up: boolean | null
  formularioCompletado: boolean | null
  stripecustomerid: string | null
  tiempo_token: string | null
  created_date: string | null
  modified_date: string | null
  authentication: Json | null
}

interface Perfil {
  _id: string
  usuario: string | null
  nombre_completo: string | null
  fotografia_profesional: string | null
  numero_telefonico: string | null
  correo_electronico: string | null
  ciudad: string | null
  estado: string | null
  colonia: string | null
  cp: string | null
  curp: string | null
  rfc: string | null
  fecha_de_nacimiento: string | null
  especializacion: Json | null
  certificaciones: Json | null
  certificaciones_archivo: Json | null
  portafolio_de_servicios_archivo: Json | null
  etiqueta: Json | null
  locacion: Json | null
  locacion_despacho: Json | null
  nombre_del_despacho: Json | null
  anios_de_experiencia_como_broker: number | null
  tipopersona: string | null
  clave_interna: string | null
  propiedades: Json | null
  created_by: string | null
  created_date: string | null
  modified_date: string | null
}

/** Vista pública: sin curp, rfc ni fecha de nacimiento. */
type PerfilPublico = Pick<
  Perfil,
  | '_id'
  | 'usuario'
  | 'nombre_completo'
  | 'fotografia_profesional'
  | 'numero_telefonico'
  | 'correo_electronico'
  | 'ciudad'
  | 'estado'
  | 'especializacion'
  | 'certificaciones'
  | 'etiqueta'
  | 'anios_de_experiencia_como_broker'
  | 'nombre_del_despacho'
>

interface Propiedad {
  _id: string
  slug_text: string | null
  created_by: string | null
  agente: string | null
  inmobiliaria_id: string | null
  descripcion: string | null
  /** Estado de PUBLICACIÓN. */
  estatus: string | null
  /** Estado GEOGRÁFICO — no confundir con `estatus`. */
  estado: string | null
  ciudad: string | null
  colonia: string | null
  codigo_postal: string | null
  destacado: boolean | null
  destacados_fechainicio: string | null
  destacados_fechafin: string | null
  precio: number | null
  precio_maximo: number | null
  precio_map: string | null
  precio_map_maximo: string | null
  precio_m2_construccion: string | null
  precio_m2_construccion_maximo: number | null
  precio_m2_terreno: string | null
  precio_m2_terreno_maximo: number | null
  tipo_de_inmueble: string | null
  tipo_de_operacion: string | null
  n_habitaciones: number | null
  n_banos: string | null
  n_mediobanos: number | null
  n_camas: number | null
  n_pisos: number | null
  m2_construccion: string | null
  m2_construccion_maximo: string | null
  m2_terreno: string | null
  m2_terreno_maximo: string | null
  antiguedad: number | null
  id_propiedad: number | null
  rotation_order: number | null
  batch_id: string | null
  latitud: number | null
  longitud: number | null
  locacion: Json | null
  favorito: Json | null
  url_fotografia_lugar: Json | null
  url_fotografia_lugar_con_marca_de_agua: Json | null
  url_marca_de_agua: Json | null
  url_tour_3d: string | null
  pdf_original: string | null
  pdf_marca_agua: string | null
  mantenimiento_precio: string | null
  mantenimiento_periodo: string | null
  mantenimiento_descripcion: string | null
  created_date: string | null
  modified_date: string | null
}

interface Miembro {
  _id: string
  usuario: string | null
  inmobiliaria: string | null
  rol: string | null
  estado: string | null
  email: string | null
  enviado: boolean | null
  invitacion_estatus: string | null
  invitado_por: string | null
  tipo_inmobiliaria: string | null
  nombre_asesor: string | null
  celular: string | null
  clave_interna: string | null
  created_by: string | null
  created_date: string | null
  modified_date: string | null
}

interface Inmobiliaria {
  _id: string
  nombre: string | null
  correo: string | null
  telefono_principal: string | null
  foto_empresa: string | null
  dueno_inmobiliaria: string | null
  subscripcion_activa: string | null
  subscripcion: Json | null
  id_customer: string | null
  especialidad: Json | null
  etiqueta: Json | null
  locacion: Json | null
  propiedades: Json | null
  created_by: string | null
  created_date: string | null
  modified_date: string | null
}

interface Interesado {
  _id: string
  propiedad: string | null
  agente: string | null
  inmobiliaria: string | null
  interesado_perfil: string | null
  created_by: string | null
  nombre: string | null
  email: string | null
  telefono: string | null
  canal: string | null
  intencion: string | null
  estatus: string | null
  presupuesto: number | null
  prioridad: boolean | null
  leido: boolean | null
  respondido: boolean | null
  proxima_accion: string | null
  fecha_ultimo_mensaje: string | null
  created_date: string | null
  modified_date: string | null
}

// ---------------------------------------------------------------------------
// Helpers de forma
// ---------------------------------------------------------------------------

/** _id lo generamos en el cliente; el resto es opcional al insertar. */
type TablaDe<T extends { _id: string }> = {
  Row: T
  Insert: Partial<T> & { _id: string }
  Update: Partial<T>
  Relationships: []
}

// ---------------------------------------------------------------------------
// Schema
// ---------------------------------------------------------------------------

export interface Database {
  public: {
    Tables: {
      user: TablaDe<User>
      perfil: TablaDe<Perfil>
      propiedades: TablaDe<Propiedad>
      miembros: TablaDe<Miembro>
      inmobiliaria: TablaDe<Inmobiliaria>
      interesados: TablaDe<Interesado>
    }
    Views: {
      perfil_publico: {
        Row: PerfilPublico
        Relationships: []
      }
    }
    Functions: {
      current_user_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      puede_publicar: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      es_miembro: {
        Args: { p_inmo: string }
        Returns: boolean
      }
      es_admin_inmo: {
        Args: { p_inmo: string }
        Returns: boolean
      }
      es_publicada: {
        Args: { p_estatus: string }
        Returns: boolean
      }
    }
    Enums: Record<PropertyKey, never>
    CompositeTypes: Record<PropertyKey, never>
  }
}