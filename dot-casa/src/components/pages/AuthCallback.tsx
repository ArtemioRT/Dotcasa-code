import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

/**
 * Pantalla a la que vuelve Google (y la confirmación de correo).
 * detectSessionInUrl ya procesó el hash antes de llegar aquí; solo
 * esperamos a que el contexto termine de cargar y redirigimos.
 */
export function AuthCallback() {
  const { session, loading, puedePublicar } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (loading) return
    if (!session) {
      navigate('/login', { replace: true })
      return
    }
    navigate(puedePublicar ? '/panel' : '/', { replace: true })
  }, [loading, session, puedePublicar, navigate])

  return <div className="p-8 text-center">Iniciando sesión…</div>
}