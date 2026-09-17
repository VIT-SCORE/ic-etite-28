import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { SCORE } from "@/data/content";

// School section linked to #score: describes SCORE and its IEEE Information Theory Society chapter.

export default function ScoreSection() {
  return (
    <section id={SCORE.id} className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
      <SectionHeader
        label={SCORE.label}
        title={SCORE.title}
        subtitle={SCORE.subtitle}
        accent="cyan"
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-7">
          <div className="mb-4 flex items-center gap-3">
            <span className="trace-node h-2.5 w-2.5 rounded-full bg-cyan" />
            <span className="mono-label text-cyan">SCHOOL · SCORE</span>
          </div>
          <p className="text-[0.92rem] leading-relaxed text-muted">{SCORE.body}</p>

          <div className="mt-6 flex gap-6 border-t border-white/8 pt-5">
            <div>
              <p className="font-display text-2xl font-bold text-cyan">5,900+</p>
              <p className="mono-label mt-1">STUDENTS</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-cyan">188</p>
              <p className="mono-label mt-1">FACULTY</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-7">
          <div className="mb-4 flex items-center gap-3">
            <span className="trace-node h-2.5 w-2.5 rounded-full bg-electric-green" />
            <span className="mono-label text-electric-green">STUDENT CHAPTER</span>
          </div>
          <h3 className="mb-3 font-display text-lg font-semibold text-ink">
            {SCORE.society.title}
          </h3>
          <p className="text-[0.92rem] leading-relaxed text-muted">
            {SCORE.society.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
