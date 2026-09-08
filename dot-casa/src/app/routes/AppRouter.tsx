import { Routes, Route } from "react-router-dom";
import { PATHS } from "./paths";
import { Home } from "../../components/pages/home/Home";
import { WhoWeAre } from "../../components/layout/WhoWeAre";
import { PrivacyPolicies } from "../../components/layout/PrivacyPolicies";
import { TermsAndConditions } from "../../components/layout/TermsAndConditions";

export const AppRouter = () => (
  <Routes>
    <Route path={PATHS.home} element={<Home />} />
    <Route path={PATHS.whoWeAre} element={<WhoWeAre />} />
    <Route path={PATHS.privacy} element={<PrivacyPolicies />} />
    <Route path={PATHS.terms} element={<TermsAndConditions />} />
    <Route path="*" element={<Home />} />
  </Routes>
);