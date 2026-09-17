import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { SPONSORS, SUPPORTED_BY, type Sponsor } from "@/data/content";

// Partners section linked to #sponsors: renders sponsor tiers and supported organizations from typed content data.

/**
 * Logo assets are proprietary and not bundled. Each tile shows a monogram
 * placeholder; drop a `logo` path into the sponsor data to render an image.
 */
function SponsorTile({ s, big = false }: { s: Sponsor; big?: boolean }) {
  const Inner = (
    <div
      className={`glass-panel group flex flex-col items-center justify-center gap-3 text-center transition-colors duration-300 hover:border-cyan/40 ${
        big ? "p-8" : "p-5"
      }`}
    >
      {s.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={s.logo} alt={s.name} className={big ? "h-14 object-contain" : "h-10 object-contain"} />
      ) : (
        <div
          className={`flex items-center justify-center rounded-lg border border-cyan/20 bg-cyan/5 font-display font-bold text-cyan ${
            big ? "h-16 w-16 text-2xl" : "h-12 w-12 text-lg"
          }`}
        >
          {s.name
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 3)}
        </div>
      )}
      <div>
        <p className={`font-display font-semibold text-ink ${big ? "text-lg" : "text-sm"}`}>
          {s.name}
        </p>
        <p className="mono-label mt-1">{s.tier}</p>
      </div>
    </div>
  );

  return s.href ? (
    <a href={s.href} target="_blank" rel="noopener noreferrer" className="block">
      {Inner}
    </a>
  ) : (
    Inner
  );
}

export default function SponsorGrid() {
  return (
    <section id="sponsors" className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
      <SectionHeader label="08 / PARTNERS" title="Sponsors & Partners" accent="cyan" />

      <Reveal className="mb-10 grid gap-4 sm:grid-cols-3">
        {SPONSORS.map((s) => (
          <SponsorTile key={s.name} s={s} big />
        ))}
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-electric-green opacity-70" />
          <span className="mono-label text-electric-green">SUPPORTED BY</span>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {SUPPORTED_BY.map((s) => (
            <SponsorTile key={s.name} s={s} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
