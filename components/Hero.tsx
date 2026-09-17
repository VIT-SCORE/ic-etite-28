"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { HERO } from "@/data/content";

// Hero section linked to #home: presents the conference identity over the VIT campus image.

function CtaButton({
  label,
  href,
  variant = "primary",
}: {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-mono text-[0.8rem] font-medium tracking-wide transition-all duration-200";
  const styles: Record<string, string> = {
    primary:
      "border-[var(--accent-red)] bg-[var(--surface)] text-[var(--accent-red)] hover:-translate-y-0.5 hover:bg-[var(--accent-red)]/10 hover:shadow-[0_10px_24px_rgba(226,29,46,0.14)]",
    secondary:
      "border-[var(--accent-cyan)]/60 bg-[var(--surface-2)] text-[var(--accent-cyan)] hover:-translate-y-0.5 hover:bg-[var(--accent-cyan)]/10 hover:shadow-[0_10px_24px_rgba(0,175,198,0.14)]",
    ghost:
      "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]",
  };
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles[variant]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80 transition group-hover:opacity-100" />
      {label}
    </a>
  );
}

function Particles() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  // Deterministic positions to avoid hydration mismatch.
  const dots = Array.from({ length: 14 }, (_, i) => ({
    left: (i * 67) % 100,
    delay: (i % 7) * 0.6,
    dur: 6 + (i % 5),
    size: i % 3 === 0 ? 2 : 1.5,
    green: i % 4 === 0,
  }));
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${d.left}%`,
            bottom: "-10px",
            width: d.size,
            height: d.size,
            background: d.green ? "#00FF9C" : "#00E5FF",
            boxShadow: `0 0 6px ${d.green ? "#00FF9C" : "#00E5FF"}`,
          }}
          animate={{ y: [0, -520], opacity: [0, 0.9, 0] }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="hero-section relative isolate min-h-[620px] overflow-hidden pt-32">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Image
          src="/assets/VIT.PNG"
          alt="VIT Vellore campus"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 60vw"
          className="hero-campus-image object-cover object-[center_right]"
        />
      </div>
      <div aria-hidden="true" className="hero-image-overlay absolute inset-0 -z-10" />
      <CircuitDecoration />
      <Particles />

      <div className="mx-auto grid min-h-[500px] max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-10 pt-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-8 lg:pb-12">
        {/* Left column: text */}
        <div>
          {/* Control-system status bar */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-status mb-6 inline-flex items-center gap-3 rounded-full px-4 py-1.5"
          >
            <span className="hero-status-indicator h-2 w-2 animate-pulse rounded-full" />
            <span className="mono-label text-[var(--text-secondary)]">SYSTEM ONLINE</span>
            <span className="h-3 w-px bg-[var(--border)]" />
            <span className="mono-label text-[var(--text-secondary)]">{HERO.eyebrow}</span>
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-5xl font-bold leading-[0.98] tracking-tight text-[var(--text-primary)] sm:text-6xl lg:text-[4.5rem]"
          >
            <span className="block">Welcome to</span>
            <span className="block">
              <span className="text-[var(--accent-red)]">ic-ETITE</span>
              <span className="text-[var(--accent-pink)]">&apos;28</span>
            </span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg"
          >
            {HERO.subtitle}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 space-y-2 border-l border-[var(--accent-cyan)]/40 pl-4"
          >
            <p className="font-mono text-sm text-[var(--text-primary)]">{HERO.sponsorLine}</p>
            <p className="flex flex-wrap items-center gap-2 font-mono text-sm text-[var(--accent-cyan)]">
              {HERO.dateLine}
              {HERO.placeholder && (
                <span className="rounded border border-[var(--accent-red)]/40 px-1.5 py-0.5 text-[0.6rem] tracking-widest text-[var(--accent-red)]">
                  2024 · TBA FOR &apos;28
                </span>
              )}
            </p>
          </motion.div>

          {/* Primary CTAs */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            {HERO.primaryCtas.map((c) => (
              <CtaButton key={c.label} {...c} />
            ))}
          </motion.div>

          {/* Secondary links */}
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
            {HERO.secondaryLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 font-mono text-xs text-muted transition hover:text-cyan"
              >
                <span className="text-cyan/60 transition group-hover:text-cyan">↳</span>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden justify-self-end lg:block"
        >
          <div className="border-l border-[var(--accent-red)] pl-4">
            <p className="font-display text-3xl font-medium italic text-[var(--text-primary)]">VIT Vellore</p>
            <p className="mt-1 font-mono text-[0.65rem] tracking-[0.25em] text-[var(--text-muted)]">A BRIGHTER TOMORROW</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="flex justify-center pb-3">
        <motion.div
          animate={reduce ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="flex flex-col items-center gap-1"
        >
          <span className="mono-label text-[var(--text-muted)]">SCROLL</span>
          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[var(--accent-cyan)]">
            <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

function CircuitDecoration() {
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-70" viewBox="0 0 1440 700" preserveAspectRatio="none" fill="none">
      <path className="hero-trace" d="M0 170H210L260 220H430M1440 480H1190L1125 415H980" />
      <path className="hero-trace hero-trace-secondary" d="M80 560H330L390 500H560M1380 145H1210L1150 205H1020" />
      <circle className="hero-node" cx="430" cy="220" r="4" />
      <circle className="hero-node" cx="980" cy="415" r="4" />
      <circle className="hero-node" cx="560" cy="500" r="3" />
      <circle className="hero-node" cx="1020" cy="205" r="3" />
    </svg>
  );
}
