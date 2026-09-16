import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { HIGHLIGHTS } from "@/data/content";

// Legacy section linked to #highlights: shows conference statistics, highlights, publication details, and proceedings.

export default function HighlightsSection() {
  return (
    <section id={HIGHLIGHTS.id} className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <SectionHeader label={HIGHLIGHTS.label} title={HIGHLIGHTS.title} accent="cyan" />

      {/* Stat strip */}
      <Reveal className="mb-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-cyan/15 bg-cyan/10 md:grid-cols-4">
        {HIGHLIGHTS.stats.map((s) => (
          <div key={s.label} className="bg-panel/90 p-5 text-center">
            <p className="font-display text-2xl font-bold text-cyan text-glow-cyan md:text-3xl">
              {s.value}
            </p>
            <p className="mt-1 font-mono text-[0.68rem] tracking-wide text-muted">
              {s.label}
            </p>
          </div>
        ))}
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="glass-panel panel-ticks p-6 md:p-8">
          <ul className="space-y-4">
            {HIGHLIGHTS.items.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan shadow-glow-cyan" />
                <span className="text-[0.95rem] leading-relaxed text-muted">{item.text}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="glass-panel flex flex-col justify-between p-6 md:p-8">
          <div>
            <p className="mono-label text-electric-green">PUBLICATION</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              All presented papers were published in IEEE Xplore.
            </p>
            <div className="mt-4 space-y-1.5">
              {HIGHLIGHTS.isbn.map((x) => (
                <p key={x} className="font-mono text-[0.72rem] text-ink/80">
                  {x}
                </p>
              ))}
            </div>
          </div>
          <a
            href={HIGHLIGHTS.proceedings.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 self-start rounded-lg border border-cyan/40 bg-cyan/10 px-4 py-2.5 font-mono text-[0.78rem] text-cyan transition hover:bg-cyan/20 hover:shadow-glow-cyan"
          >
            {HIGHLIGHTS.proceedings.label}
            <span aria-hidden>↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
