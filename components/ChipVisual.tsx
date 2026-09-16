"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HERO, BRAND } from "@/data/content";

// Hero-only chip illustration: turns HERO signal data and the brand logo into the animated processor graphic.

/**
 * The hero centrepiece: an IC / processor rendered in SVG with animated pins,
 * a breathing core, travelling bus pulses and floating monospace signal labels.
 */
export default function ChipVisual() {
  const reduce = useReducedMotion();

  // 10 pins per side around a central 120x120 chip inside a 320 box.
  const pins = Array.from({ length: 10 });

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[380px]">
      {/* Floating signal labels */}
      {HERO.signals.map((s, i) => {
        const angle = (i / HERO.signals.length) * Math.PI * 2;
        const r = 46; // percent radius
        const left = 50 + Math.cos(angle) * r;
        const top = 50 + Math.sin(angle) * r;
        return (
          <motion.span
            key={s}
            className="absolute hidden -translate-x-1/2 -translate-y-1/2 rounded border border-cyan/20 bg-panel/70 px-1.5 py-0.5 font-mono text-[0.55rem] tracking-widest text-cyan/80 backdrop-blur sm:block"
            style={{ left: `${left}%`, top: `${top}%` }}
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? {} : { opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, delay: i * 0.4, repeat: Infinity }}
          >
            {s}
          </motion.span>
        );
      })}

      <svg viewBox="0 0 320 320" className="h-full w-full overflow-visible">
        <defs>
          <radialGradient id="core-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.9" />
            <stop offset="55%" stopColor="#00A5C0" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#00303a" stopOpacity="0.1" />
          </radialGradient>
          <filter id="chip-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Bus traces feeding into the chip from each edge */}
        {[
          "M 0 60 H 100",
          "M 0 160 H 100",
          "M 0 260 H 100",
          "M 320 60 H 220",
          "M 320 160 H 220",
          "M 320 260 H 220",
          "M 60 0 V 100",
          "M 160 0 V 100",
          "M 260 0 V 100",
          "M 60 320 V 220",
          "M 160 320 V 220",
          "M 260 320 V 220",
        ].map((d, i) => (
          <g key={i}>
            <path d={d} stroke={i % 3 === 1 ? "#00FF9C" : "#00E5FF"} strokeOpacity={0.28} strokeWidth={1.4} fill="none" />
            {!reduce && (
              <motion.path
                d={d}
                pathLength={100}
                stroke={i % 3 === 1 ? "#00FF9C" : "#00E5FF"}
                strokeWidth={2}
                strokeLinecap="round"
                strokeDasharray="12 88"
                fill="none"
                filter="url(#chip-glow)"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: [100, 0] }}
                transition={{ duration: 2.6 + (i % 4) * 0.6, repeat: Infinity, ease: "linear", delay: i * 0.18 }}
              />
            )}
          </g>
        ))}

        {/* Chip body */}
        <rect x="100" y="100" width="120" height="120" rx="14" fill="#0B1117" stroke="#00E5FF" strokeOpacity={0.5} strokeWidth={1.5} filter="url(#chip-glow)" />
        <rect x="112" y="112" width="96" height="96" rx="9" fill="none" stroke="#00E5FF" strokeOpacity={0.18} strokeWidth={1} />

        {/* Chip pins */}
        {pins.map((_, i) => {
          const p = 106 + i * ((208 - 106) / 9);
          return (
            <g key={i}>
              <rect x={p} y={92} width={3} height={8} fill="#00E5FF" opacity={0.55} />
              <rect x={p} y={220} width={3} height={8} fill="#00E5FF" opacity={0.55} />
              <rect x={92} y={p} width={8} height={3} fill="#00FF9C" opacity={0.5} />
              <rect x={220} y={p} width={8} height={3} fill="#00FF9C" opacity={0.5} />
            </g>
          );
        })}

        {/* Breathing core */}
        <motion.circle
          cx="160"
          cy="160"
          r="34"
          fill="url(#core-grad)"
          filter="url(#chip-glow)"
          animate={reduce ? {} : { opacity: [0.75, 1, 0.75], scale: [0.96, 1.04, 0.96] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "160px 160px" }}
        />

        {/* Logo placeholder sits on the die. Replace public/assets/logo.svg to swap. */}
        <foreignObject x="128" y="128" width="64" height="64">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={BRAND.logo} alt="" width={64} height={64} className="h-16 w-16 object-contain opacity-90" />
        </foreignObject>

        {/* Die label */}
        <text x="160" y="238" textAnchor="middle" className="font-mono" fill="#8B98A7" fontSize="7" letterSpacing="2">
          IC-ETITE · SoC
        </text>
      </svg>
    </div>
  );
}
