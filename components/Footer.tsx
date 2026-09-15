import Reveal from "./Reveal";
import { CONTACT, SOCIALS, BRAND } from "@/data/content";
import { SocialGlyph } from "./SocialIcons";

export default function Footer() {
  return (
    <footer id={CONTACT.id} className="relative mt-8 border-t border-cyan/12">
      {/* top edge trace */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-12 flex items-center gap-3">
          <span className="h-px w-8 bg-cyan opacity-70" />
          <span className="mono-label text-cyan">{CONTACT.label}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr_1fr]">
          {/* Brand + contact */}
          <Reveal>
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={BRAND.logo} alt="" width={44} height={44} className="h-11 w-11" />
              <span className="font-display text-xl font-bold text-ink">
                ic-ETITE <span className="text-cyan">&apos;28</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {BRAND.fullName}
            </p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-cyan transition hover:underline"
            >
              <SocialGlyph icon="email" />
              {CONTACT.email}
            </a>

            {/* Social links */}
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-muted transition hover:border-cyan/40 hover:text-cyan hover:shadow-glow-cyan"
                >
                  <SocialGlyph icon={s.icon} />
                </a>
              ))}
            </div>
          </Reveal>

          {/* Address */}
          <Reveal delay={0.05}>
            <p className="mono-label mb-4 text-electric-green">ADDRESS</p>
            <address className="not-italic">
              {CONTACT.address.map((line, i) => (
                <p
                  key={i}
                  className={`text-sm leading-relaxed ${
                    i === 0 ? "font-medium text-ink" : "text-muted"
                  }`}
                >
                  {line}
                </p>
              ))}
            </address>
          </Reveal>

          {/* Documents */}
          <Reveal delay={0.1}>
            <p className="mono-label mb-4 text-cyan">DOCUMENTS</p>
            <div className="space-y-2.5">
              {CONTACT.documents.map((d) => (
                <a
                  key={d.label}
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 rounded-lg border border-white/8 bg-panel/50 px-4 py-2.5 text-sm text-muted transition hover:border-cyan/35 hover:text-ink"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-cyan/70 group-hover:text-cyan">
                    <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {d.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Colophon */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-6 sm:flex-row">
          <p className="font-mono text-[0.7rem] tracking-wide text-muted">
            © {new Date().getFullYear()} ic-ETITE · VIT Vellore · Technically co-sponsored by IEEE
          </p>
          <p className="font-mono text-[0.7rem] tracking-wide text-muted">
            <span className="text-electric-green">●</span> Content retained from 2024 as editable placeholder
          </p>
        </div>
      </div>
    </footer>
  );
}
