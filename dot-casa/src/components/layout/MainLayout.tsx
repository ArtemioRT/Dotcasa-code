import { Outlet } from "react-router-dom";
import { NavBar } from "./navBar/NavBar";
import { Footer } from "./Footer";

/**
 * Layout del sitio público: header + contenido + footer.
 * Las pantallas de auth NO usan este layout, por eso el NavBar y el Footer
 * viven aquí y no en App.tsx.
 */
export const MainLayout = () => (
  <>
    <NavBar />
    <Outlet />
    <Footer />
  </>
);