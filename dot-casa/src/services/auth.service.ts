import { supabase } from '../lib/supabase'
import type { Session } from '@supabase/supabase-js'

export function registrarConCorreo(email: string, password: string) {
  return supabase.auth.signUp({
    email,
    password,
    options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
  })
}

export function entrarConCorreo(email: string, password: string) {
  return supabase.auth.signInWithPassword({ email, password })
}

export function entrarConGoogle() {
  return supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: `${window.location.origin}/auth/callback` },
  })
}

export function cerrarSesion() {
  return supabase.auth.signOut()
}

/**
 * Reseteo de contraseña. Supabase genera y valida el token internamente
 * (recovery_token en auth.users), por eso la columna tiempo_token que
 * venía de Bubble ya no se usa.
 */
export function pedirResetPassword(email: string) {
  return supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/auth/nueva-password`,
  })
}

/** Se llama desde la pantalla a la que redirige el correo. */
export function cambiarPassword(password: string) {
  return supabase.auth.updateUser({ password })
}

/**
 * Pide el token EN EL MOMENTO de usarlo. Nunca guardes access_token en
 * useState: tras el primer refresh automático tu copia queda vieja.
 */
export async function getAccessToken(): Promise<string | null> {
  const { data } = await supabase.auth.getSession()
  return data.session?.access_token ?? null
}

export type { Session }