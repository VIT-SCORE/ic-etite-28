import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { ABOUT } from "@/data/content";

// About ic-ETITE section linked to #about: renders the conference overview and technical scope readout.

export default function ContentSection() {
  return (
    <section id={ABOUT.id} className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <SectionHeader label={ABOUT.label} title={ABOUT.title} accent="cyan" />

      <Reveal className="glass-panel panel-ticks p-6 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
          <p className="content-text max-w-3xl">
            {ABOUT.body}
          </p>

          {/* Small technical read-out to the side */}
          <div className="flex flex-row gap-6 lg:flex-col lg:border-l lg:border-cyan/15 lg:pl-8">
            {[
              { k: "FORMAT", v: "Hybrid" },
              { k: "INDEXING", v: "IEEE Xplore" },
              { k: "SCOPE", v: "International" },
            ].map((item) => (
              <div key={item.k}>
                <p className="mono-label text-cyan">{item.k}</p>
                <p className="mt-1 font-display text-lg text-ink">{item.v}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
