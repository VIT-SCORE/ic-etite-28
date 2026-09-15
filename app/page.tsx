import CircuitBackground from "@/components/CircuitBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";
import ThemeSection from "@/components/ThemeSection";
import HighlightsSection from "@/components/HighlightsSection";
import VITSection from "@/components/VITSection";
import ScoreSection from "@/components/ScoreSection";
import ManuscriptSection from "@/components/ManuscriptSection";
import SponsorGrid from "@/components/SponsorGrid";
import Footer from "@/components/Footer";
import TraceDivider from "@/components/TraceDivider";

export default function Home() {
  return (
    <>
      {/* Fixed PCB background lives behind every section */}
      <CircuitBackground />

      <Navbar />

      <main className="relative z-10">
        <Hero />

        {/* Hero → About: a cyan trace drops downward */}
        <TraceDivider variant="straight" color="cyan" />
        <ContentSection />

        {/* About → Theme: the trace branches into multiple paths */}
        <TraceDivider variant="branch" color="green" />
        <ThemeSection />

        {/* Theme → Highlights: nodes illuminate as the section enters view */}
        <TraceDivider variant="nodes" color="cyan" />
        <HighlightsSection />

        <TraceDivider variant="straight" color="green" />
        <VITSection />

        <TraceDivider variant="nodes" color="cyan" />
        <ScoreSection />

        <TraceDivider variant="branch" color="cyan" />
        <ManuscriptSection />

        <TraceDivider variant="straight" color="green" />
        <SponsorGrid />
      </main>

      <Footer />
    </>
  );
}
