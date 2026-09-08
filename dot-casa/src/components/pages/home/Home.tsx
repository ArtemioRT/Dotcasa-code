import { ContactSection } from "./components/ContactSection";
import { FrequentAsks } from "./components/FrequentAsks";
import { HighlightsSection } from "./components/HighlightsSection";
import { InmMain } from "./components/InmMain";
import { PrincipalHome } from "./components/PrincipalHome";
import { PropertySection } from "./components/PropertySection";

export const Home = () => {
  return (
    <>
      <section className="main-principal">
        <PrincipalHome />
        <PropertySection />
        <InmMain />
        <FrequentAsks />
        <ContactSection />
        <HighlightsSection />
      </section>
    </>
  );
};
