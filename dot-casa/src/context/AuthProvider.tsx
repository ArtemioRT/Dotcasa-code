/**
 * Provider de sesión. Falta en el repo: AuthContext.tsx define el contexto y
 * el hook, pero nadie lo llena, así que useAuth() siempre revienta.
 *
 * Va en archivo aparte por la misma regla de react-refresh que ya comenta
 * AuthContext.tsx: este .tsx exporta un componente y nada más.
 */
import { useCallback, useEffect, useState, type ReactNode } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";
import { getMiUsuario, getCurrentUserId, puedePublicar as rpcPuedePublicar } from "../services/usuario.service";
import type { UserRow } from "../types/models";
import { AuthContext, type AuthContextValue } from "./AuthContext";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [usuario, setUsuario] = useState<UserRow | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [puedePublicar, setPuedePublicar] = useState(false);
  const [loading, setLoading] = useState(true);

  /** Carga los datos que dependen de la BD. Sin sesión, limpia todo. */
  const cargarDatos = useCallback(async (sesion: Session | null) => {
    if (!sesion) {
      setUsuario(null);
      setUserId(null);
      setPuedePublicar(false);
      return;
    }
    try {
      const [fila, id, publica] = await Promise.all([
        getMiUsuario(),
        getCurrentUserId(),
        rpcPuedePublicar(),
      ]);
      setUsuario(fila);
      setUserId(id);
      setPuedePublicar(publica);
    } catch (e) {
      // Si el trigger link_auth_user no corrió, current_user_id() devuelve
      // null y las policies bloquean todo. Mejor saberlo en consola que
      // quedarse con una pantalla en blanco.
      console.error("No se pudieron cargar los datos del usuario:", e);
      setUsuario(null);
      setUserId(null);
      setPuedePublicar(false);
    }
  }, []);

  useEffect(() => {
    let activo = true;

    supabase.auth.getSession().then(async ({ data }) => {
      if (!activo) return;
      setSession(data.session);
      setAuthUser(data.session?.user ?? null);
      await cargarDatos(data.session);
      if (activo) setLoading(false);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_evento, sesion) => {
      setSession(sesion);
      setAuthUser(sesion?.user ?? null);
      // NO hagas await de otra llamada a supabase dentro de este callback:
      // se queda colgado porque el cliente sigue sosteniendo su lock interno.
      // Sacarlo del callback con setTimeout(0) es el workaround oficial.
      setTimeout(() => {
        void cargarDatos(sesion);
      }, 0);
    });

    return () => {
      activo = false;
      sub.subscription.unsubscribe();
    };
  }, [cargarDatos]);

  const refrescarUsuario = useCallback(async () => {
    const { data } = await supabase.auth.getSession();
    setSession(data.session);
    setAuthUser(data.session?.user ?? null);
    await cargarDatos(data.session);
  }, [cargarDatos]);

  const value: AuthContextValue = {
    session,
    authUser,
    usuario,
    userId,
    puedePublicar,
    loading,
    refrescarUsuario,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}