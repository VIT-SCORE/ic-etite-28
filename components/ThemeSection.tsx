import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { THEME } from "@/data/content";

// Theme section linked to #theme: renders the mission statement and broad research-track cards.

export default function ThemeSection() {
  return (
    <section id={THEME.id} className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
      <SectionHeader label={THEME.label} title={THEME.title} accent="green" />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="text-[0.98rem] leading-relaxed text-muted md:text-base">
            {THEME.body}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mono-label mb-4 text-electric-green">BROAD AREAS · TRACKS</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {THEME.tracks.map((t, i) => (
              <div
                key={t}
                className="group relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors duration-300 hover:border-electric-green/40"
              >
                {/* hover electricity sweep */}
                <span className="pointer-events-none absolute inset-x-0 -top-px h-px translate-x-[-100%] bg-gradient-to-r from-transparent via-electric-green to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
                <div className="flex items-center gap-3">
                  <span className="trace-node h-2 w-2 rounded-full bg-electric-green" />
                  <span className="font-mono text-[0.7rem] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-2 font-display text-base font-medium text-ink">{t}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
