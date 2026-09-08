import { NavBar } from "../components/layout/navBar/NavBar";
import { Footer } from "../components/layout/Footer";
import { AppRouter } from "./routes/AppRouter";

export const App = () => (
  <>
    <NavBar />
    <AppRouter />
    <Footer />
  </>
);