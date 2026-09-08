import { Footer } from "../components/layout/Footer";
import { Home } from "../components/pages/home/Home";
// import { WhoWeAre } from "../components/layout/WhoWeAre";
// import { PrivacyPolicies } from "../components/layout/PrivacyPolicies";

// import { NavBar } from "../components/layout/navBar/NavBar";
// import { PrivacyPolicies } from "../components/layout/PrivacyPolicies";
// import { TermsAndConditions } from "../components/layout/TermsAndConditions";

export const App = () => {
  return (
    <>
      <section className="main-test">
        {/* <NavBar /> */}
        <Home />
        {/* <WhoWeAre /> */}
        {/* <PrivacyPolicies /> */}
        {/* <TermsAndConditions /> */}
        <Footer />
      </section>
    </>
  );
};
