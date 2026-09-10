/**
 * Contexto y hook, SIN JSX y sin componentes.
 *
 * Van en su propio archivo por la regla react-refresh/only-export-components:
 * un archivo .tsx que exporta un componente no debe exportar además hooks
 * o constantes, o Fast Refresh deja de funcionar.
 */
import { createContext, useContext } from 'react'
import type { Session, User } from '@supabase/supabase-js'
import type { UserRow } from '../types/models'

export interface AuthContextValue {
  session: Session | null
  authUser: User | null
  /** Fila de public."user" — de aquí sale el _id que usan todas las FKs. */
  usuario: UserRow | null
  /** _id de Bubble del usuario logueado. */
  userId: string | null
  /** true = agente (tiene perfil). false = cliente. */
  puedePublicar: boolean
  loading: boolean
  refrescarUsuario: () => Promise<void>
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth debe usarse dentro de <AuthProvider>')
  return ctx
}