import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import EventImageCard from "./EventImageCard";
import { HIGHLIGHTS, PREVIOUS_EVENT_IMAGES } from "@/data/content";

// Legacy section linked to #highlights: shows conference statistics, highlights, publication details, and proceedings.

export default function HighlightsSection() {
  return (
    <section id={HIGHLIGHTS.id} className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
      <SectionHeader label={HIGHLIGHTS.label} title={HIGHLIGHTS.title} accent="cyan" titleClassName="highlight-neon-title" />

      {/* Stat strip */}
      <Reveal className="mb-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--border)] md:grid-cols-4">
        {HIGHLIGHTS.stats.map((s) => (
          <div key={s.label} className="bg-[var(--surface)] p-4 text-center">
            <p className="font-display text-2xl font-bold highlight-neon-title md:text-3xl">
              {s.label === "Technical sessions" && <CountUp target={21} />}
              {s.label === "Keynote sessions" && <CountUp target={17} />}
              {s.label === "Hackathon participants" && <CountUp target={500} suffix="+" />}
              {s.label === "Prize pool" && <CountUp target={100000} prefix="₹" format="indian" />}
            </p>
            <p className="mt-1 font-mono text-[0.68rem] tracking-wide text-secondary">
              {s.label}
            </p>
          </div>
        ))}
      </Reveal>

      <Reveal className="mb-8" delay={0.05}>
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="mono-label text-cyan">EVENT ARCHIVE</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">
              Previous Events
            </h3>
          </div>
          <span className="hidden font-mono text-[0.68rem] tracking-[0.12em] text-[var(--text-muted)] sm:block">
            IC-ETITE&apos;20 · PHOTO COLLECTION
          </span>
        </div>
        <div className="grid gap-3 md:grid-cols-[1.35fr_1fr]">
          <EventImageCard
            title={PREVIOUS_EVENT_IMAGES[0].title}
            subtitle={PREVIOUS_EVENT_IMAGES[0].label}
            image={PREVIOUS_EVENT_IMAGES[0].image}
            aspectRatio="landscape"
          />
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
            <EventImageCard
              title={PREVIOUS_EVENT_IMAGES[1].title}
              subtitle={PREVIOUS_EVENT_IMAGES[1].label}
              image={PREVIOUS_EVENT_IMAGES[1].image}
              aspectRatio="landscape"
            />
            <EventImageCard
              title={PREVIOUS_EVENT_IMAGES[2].title}
              subtitle={PREVIOUS_EVENT_IMAGES[2].label}
              image={PREVIOUS_EVENT_IMAGES[2].image}
              aspectRatio="landscape"
            />
          </div>
        </div>
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-7">
          <ul className="space-y-4">
            {HIGHLIGHTS.items.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan shadow-glow-cyan" />
                <span className="text-[0.95rem] leading-relaxed text-secondary">{item.text}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-7">
          <div>
            <p className="mono-label text-electric-green">PUBLICATION</p>
            <p className="mt-3 text-sm leading-relaxed text-secondary">
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
