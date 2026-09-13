import { useEffect, useState, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { entrarConCorreo, entrarConGoogle } from "../../../services/auth.service";
import { useAuth } from "../../../context/AuthContext";
import { PATHS } from "../../../app/routes/paths";

/** Supabase devuelve los errores en inglés; aquí se traducen los comunes. */
function mensajeDeError(msg: string): string {
  if (msg.includes("Invalid login credentials"))
    return "Correo o contraseña incorrectos.";
  if (msg.includes("Email not confirmed"))
    return "Aún no confirmas tu correo. Revisa tu bandeja de entrada.";
  if (msg.includes("Email rate limit") || msg.includes("request this after"))
    return "Demasiados intentos. Espera un momento e inténtalo de nuevo.";
  return "No pudimos iniciar sesión. Inténtalo de nuevo.";
}

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { session, loading: cargandoSesion } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verPassword, setVerPassword] = useState(false);
  const [recordarme, setRecordarme] = useState(true);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // A dónde volver después de entrar: RutaProtegida guarda el origen aquí.
  const destino = (location.state as { from?: string } | null)?.from ?? PATHS.home;

  // Si ya hay sesión, esta pantalla no tiene nada que hacer.
  useEffect(() => {
    if (!cargandoSesion && session) navigate(destino, { replace: true });
  }, [cargandoSesion, session, destino, navigate]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !password) {
      setError("Escribe tu correo y tu contraseña.");
      return;
    }

    setEnviando(true);
    const { error: err } = await entrarConCorreo(email.trim(), password);
    setEnviando(false);

    if (err) {
      setError(mensajeDeError(err.message));
      return;
    }
    // No navegues aquí: onAuthStateChange actualiza el contexto y el useEffect
    // de arriba redirige. Así el destino siempre ve la sesión ya cargada.
  };

  const handleGoogle = async () => {
    setError(null);
    setEnviando(true);
    const { error: err } = await entrarConGoogle();
    if (err) {
      setEnviando(false);
      setError("No pudimos conectar con Google. Inténtalo de nuevo.");
    }
    // Si no hubo error el navegador ya se está yendo a Google.
  };

  return (
    <section className="auth-screen">
      <form className="input-container" onSubmit={handleSubmit} noValidate>
        <header className="header-containers">
          <img
            src="/img/icons/header_icon.svg"
            alt="Imagen del icono de login"
          />
          <h3>Iniciar sesión</h3>
        </header>

        <div className="row-input-container">
          <div className="input-label-container">
            <label htmlFor="login-email">
              <p>Correo electrónico</p>
            </label>
            <input
              id="login-email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={enviando}
            />
          </div>

          <div className="input-label-container">
            <label htmlFor="login-password">
              <p>Contraseña</p>
            </label>
            <div className="input-icon">
              <input
                id="login-password"
                name="password"
                className="no-borders"
                type={verPassword ? "text" : "password"}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={enviando}
              />
              <img
                src={
                  verPassword
                    ? "/img/icons/eye_hide.svg"
                    : "/img/icons/eye_show.svg"
                }
                alt={
                  verPassword ? "Ocultar la contraseña" : "Mostrar la contraseña"
                }
                role="button"
                tabIndex={0}
                style={{ cursor: "pointer" }}
                onClick={() => setVerPassword((v) => !v)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setVerPassword((v) => !v);
                  }
                }}
              />
            </div>
          </div>
        </div>

        {error && (
          <p className="auth-error" role="alert">
            {error}
          </p>
        )}

        <div className="border-container">
          <div className="row-txts checkbox-container p-font-size">
            <label className="dot-checkbox">
              <input
                type="checkbox"
                checked={recordarme}
                onChange={(e) => setRecordarme(e.target.checked)}
              />
              <span className="checkmark"></span>
            </label>
            <p>Recuérdame</p>
          </div>
          <Link to={PATHS.resetPassword}>
            <h3>¿Olvidaste tu contraseña?</h3>
          </Link>
        </div>

        <button className="login-btn" type="submit" disabled={enviando}>
          {enviando ? "Entrando…" : "Continuar"}
        </button>

        <button
          className="g-login-btn"
          type="button"
          onClick={handleGoogle}
          disabled={enviando}
        >
          <img
            src="/img/icons/g-icons.svg"
            alt="Imagen del logotipo de Google"
          />
          Continuar con google
        </button>

        <div className="border-container">
          <h3 className="light-txt">¿No estas registrado? </h3>
          <Link to={PATHS.preRegister}>
            <h3>Crear cuenta</h3>
          </Link>
        </div>
      </form>
    </section>
  );
};