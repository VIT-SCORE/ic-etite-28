"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HERO } from "@/data/content";
import ChipVisual from "./ChipVisual";

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
      "bg-cyan/12 text-cyan border border-cyan/40 hover:bg-cyan/20 hover:shadow-glow-cyan",
    secondary:
      "bg-electric-green/10 text-electric-green border border-electric-green/40 hover:bg-electric-green/18 hover:shadow-glow-green",
    ghost:
      "text-muted border border-white/10 hover:border-cyan/40 hover:text-cyan",
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
    <section id="home" className="relative overflow-hidden pt-32 md:pt-36">
      <Particles />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-16 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-8 lg:pb-24">
        {/* Left column: text */}
        <div>
          {/* Control-system status bar */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-panel mb-6 inline-flex items-center gap-3 rounded-full px-4 py-1.5"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-electric-green shadow-glow-green" />
            <span className="mono-label text-electric-green">SYSTEM ONLINE</span>
            <span className="h-3 w-px bg-white/10" />
            <span className="mono-label">{HERO.eyebrow}</span>
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Welcome to
            <br />
            <span className="text-cyan text-glow-cyan">ic-ETITE </span>
            <span className="text-electric-green text-glow-green">&apos;28</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            {HERO.subtitle}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 space-y-2 border-l border-cyan/20 pl-4"
          >
            <p className="font-mono text-sm text-ink/80">{HERO.sponsorLine}</p>
            <p className="flex flex-wrap items-center gap-2 font-mono text-sm text-cyan">
              {HERO.dateLine}
              {HERO.placeholder && (
                <span className="rounded border border-ieee-red/40 px-1.5 py-0.5 text-[0.6rem] tracking-widest text-ieee-red">
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
            className="mt-8 flex flex-wrap gap-3"
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

        {/* Right column: chip visual */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <ChipVisual />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="flex justify-center pb-6">
        <motion.div
          animate={reduce ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="flex flex-col items-center gap-1"
        >
          <span className="mono-label">SCROLL</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-cyan">
            <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
