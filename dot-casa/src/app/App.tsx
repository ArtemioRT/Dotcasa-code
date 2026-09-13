import { AppRouter } from "./routes/AppRouter";
import { AuthProvider } from "../context/AuthProvider";

export const App = () => (
  <AuthProvider>
    <AppRouter />
  </AuthProvider>
);