import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

interface Props {
  children: ReactNode
  /** true = además de sesión, exige ser agente (tener perfil). */
  soloAgentes?: boolean
}

export function RutaProtegida({ children, soloAgentes = false }: Props) {
  const { session, puedePublicar, loading } = useAuth()
  const location = useLocation()

  // Sin esto, en el primer render session es null aunque el usuario SÍ
  // esté logueado, y lo expulsarías al login en cada refresh de página.
  if (loading) return <div className="p-8 text-center">Cargando…</div>

  if (!session) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />
  }

  if (soloAgentes && !puedePublicar) {
    return <Navigate to="/registro-agente" replace />
  }

  return <>{children}</>
}