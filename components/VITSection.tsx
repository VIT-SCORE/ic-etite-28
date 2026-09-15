import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { VIT } from "@/data/content";

export default function VITSection() {
  return (
    <section id={VIT.id} className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <SectionHeader label={VIT.label} title={VIT.title} accent="green" />

      <Reveal className="glass-panel panel-ticks mb-8 p-6 md:p-10">
        <p className="max-w-4xl text-[0.98rem] leading-relaxed text-muted md:text-base">
          {VIT.body}
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-electric-green opacity-70" />
          <h3 className="font-display text-xl font-semibold text-ink md:text-2xl">
            {VIT.ranking.label}
          </h3>
        </div>
        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-muted">
          {VIT.ranking.intro}
        </p>

        <div className="grid gap-3 md:grid-cols-2">
          {VIT.ranking.items.map((r, i) => (
            <div
              key={i}
              className="group flex gap-3 rounded-xl border border-white/8 bg-panel/50 p-4 transition-colors hover:border-electric-green/35"
            >
              <span className="mono-label mt-0.5 text-electric-green">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[0.85rem] leading-relaxed text-muted">{r}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
