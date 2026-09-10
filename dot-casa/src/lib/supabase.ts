import { createClient } from '@supabase/supabase-js'
import type { Database } from '../types/database'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!url || !anonKey) {
  throw new Error('Faltan VITE_SUPABASE_URL o VITE_SUPABASE_ANON_KEY en .env')
}

/**
 * UNA sola instancia para toda la app. Nunca llames createClient() en otro
 * lado: varias instancias rompen la sesión de auth.
 *
 * Estas opciones ya vienen en true por defecto; se declaran para dejarlo
 * explícito:
 *  - autoRefreshToken: renueva el JWT (dura 1h) antes de que expire.
 *    NO escribas tu propio setInterval, pelearía con este timer.
 *  - detectSessionInUrl: necesario para el callback de Google.
 */
export const supabase = createClient<Database>(url, anonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'pkce',
  },
})