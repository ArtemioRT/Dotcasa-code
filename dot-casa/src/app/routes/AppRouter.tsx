import { Routes, Route } from "react-router-dom";
import { PATHS } from "./paths";
import { MainLayout } from "../../components/layout/MainLayout";
import { Home } from "../../components/pages/home/Home";
import { WhoWeAre } from "../../components/layout/WhoWeAre";
import { PrivacyPolicies } from "../../components/layout/PrivacyPolicies";
import { TermsAndConditions } from "../../components/layout/TermsAndConditions";
import { Login } from "../../components/pages/auth/Login";
import { PrevRegister } from "../../components/pages/auth/register/PrevRegister";
import { SendResetPassword } from "../../components/pages/auth/common/SendResetPassword";
import { ResetPassword } from "../../components/pages/auth/common/ResetPassword";
import { AuthCallback } from "../../components/pages/AuthCallback";

export const AppRouter = () => (
  <Routes>
    {/* Pantallas de auth: sin header ni footer. */}
    <Route path={PATHS.login} element={<Login />} />
    <Route path={PATHS.preRegister} element={<PrevRegister />} />
    <Route path={PATHS.resetPassword} element={<SendResetPassword />} />
    <Route path={PATHS.newPassword} element={<ResetPassword />} />
    <Route path={PATHS.authCallback} element={<AuthCallback />} />

    {/* Sitio público: todo lo de adentro hereda NavBar + Footer. */}
    <Route element={<MainLayout />}>
      <Route path={PATHS.home} element={<Home />} />
      <Route path={PATHS.whoWeAre} element={<WhoWeAre />} />
      <Route path={PATHS.privacy} element={<PrivacyPolicies />} />
      <Route path={PATHS.terms} element={<TermsAndConditions />} />
      <Route path="*" element={<Home />} />
    </Route>
  </Routes>
);