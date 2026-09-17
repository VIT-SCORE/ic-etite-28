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

// Homepage composition: connects the global PCB layer, navigation, content sections, dividers, and footer.
export default function Home() {
  return (
    <>
      {/* Fixed PCB background lives behind every section */}
      <CircuitBackground />

      <Navbar />

      <main className="relative z-10">
        <Hero />

        <ContentSection />
        <ThemeSection />
        <HighlightsSection />
        <VITSection />
        <ScoreSection />
        <ManuscriptSection />
        <SponsorGrid />
      </main>

      <Footer />
    </>
  );
}
