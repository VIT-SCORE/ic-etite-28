import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { ABOUT } from "@/data/content";

// About ic-ETITE section linked to #about: renders the conference overview and technical scope readout.

export default function ContentSection() {
  return (
    <section id={ABOUT.id} className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
      <SectionHeader label={ABOUT.label} title={ABOUT.title} accent="cyan" />

      <Reveal>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
          <p className="content-text max-w-3xl">
            {ABOUT.body}
          </p>

          {/* Small technical read-out to the side */}
          <div className="grid grid-cols-3 gap-4 border-t border-[var(--border)] pt-5 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            {[
              { k: "FORMAT", v: "Hybrid" },
              { k: "INDEXING", v: "IEEE Xplore" },
              { k: "SCOPE", v: "International" },
            ].map((item) => (
              <div key={item.k}>
                <p className="mono-label text-cyan">{item.k}</p>
                <p className="mt-1 font-display text-lg text-[var(--text-primary)]">{item.v}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
