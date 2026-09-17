import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { MANUSCRIPT } from "@/data/content";

// Submission section linked to #manuscript: provides paper instructions, submission link, contact, and checklist.

export default function ManuscriptSection() {
  return (
    <section id={MANUSCRIPT.id} className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
      <SectionHeader label={MANUSCRIPT.label} title={MANUSCRIPT.title} accent="green" />

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <Reveal className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-7">
          <p className="text-[0.95rem] leading-relaxed text-secondary">{MANUSCRIPT.body}</p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={MANUSCRIPT.submitLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-electric-green/40 bg-electric-green/12 px-5 py-3 font-mono text-[0.8rem] text-electric-green transition hover:bg-electric-green/20 hover:shadow-glow-green"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              {MANUSCRIPT.submitLink.label}
            </a>
            <div className="font-mono text-xs text-muted">
              Queries ·{" "}
              <a
                href={`mailto:${MANUSCRIPT.queriesEmail}`}
                className="text-cyan hover:underline"
              >
                {MANUSCRIPT.queriesEmail}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-7">
          <p className="mono-label mb-4 text-cyan">SUBMISSION CHECKLIST</p>
          <ul className="space-y-3">
            {MANUSCRIPT.checklist.map((c) => (
              <li key={c} className="flex items-center gap-3">
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border border-electric-green/40 text-electric-green">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                    <path d="m5 12 5 5 9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-[0.85rem] text-secondary">{c}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
