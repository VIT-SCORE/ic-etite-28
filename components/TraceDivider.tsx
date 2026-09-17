"use client";

import { motion, useReducedMotion } from "framer-motion";

// Section connector used by the homepage: draws animated PCB traces between consecutive content blocks.

type Variant = "straight" | "branch" | "nodes";

/**
 * A short SVG PCB trace placed between sections. As it scrolls into view the
 * trace "draws" itself and its nodes illuminate, so consecutive sections read
 * like one continuous board.
 */
export default function TraceDivider({
  variant = "straight",
  color = "cyan",
}: {
  variant?: Variant;
  color?: "cyan" | "green";
}) {
  const prefersReducedMotion = useReducedMotion();
  const stroke = color === "cyan" ? "var(--circuit-primary)" : "var(--circuit-secondary)";

  const paths: Record<Variant, string[]> = {
    // Single line dropping down the page
    straight: ["M 200 0 V 40 L 170 70 V 120"],
    // One trace branching into several electronic paths
    branch: [
      "M 200 0 V 30 L 200 30",
      "M 200 30 L 120 70 L 120 120",
      "M 200 30 L 280 70 L 280 120",
      "M 200 30 V 120",
    ],
    // A run studded with nodes that light up
    nodes: ["M 40 60 H 360"],
  };

  const nodePoints: Record<Variant, [number, number][]> = {
    straight: [[200, 0], [170, 70], [170, 120]],
    branch: [[200, 30], [120, 120], [200, 120], [280, 120]],
    nodes: [[40, 60], [130, 60], [220, 60], [310, 60], [360, 60]],
  };

  const draw = {
    hidden: { pathLength: 0, opacity: 0.2 },
    show: {
      pathLength: 1,
      opacity: 0.8,
      transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <div className="circuit-transition pointer-events-none flex justify-center" aria-hidden="true">
      <svg
        width="400"
        height="120"
        viewBox="0 0 400 120"
        fill="none"
        className="overflow-visible"
      >
        <defs>
          <filter id={`td-glow-${variant}`} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {paths[variant].map((d, i) =>
          prefersReducedMotion ? (
            <path
              key={i}
              d={d}
              stroke={stroke}
              strokeWidth={1.6}
              strokeOpacity={0.6}
              filter={`url(#td-glow-${variant})`}
            />
          ) : (
            <motion.path
              key={i}
              d={d}
              stroke={stroke}
              strokeWidth={1.6}
              filter={`url(#td-glow-${variant})`}
              variants={draw}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
            />
          )
        )}

        {nodePoints[variant].map(([cx, cy], i) =>
          prefersReducedMotion ? (
            <circle key={i} cx={cx} cy={cy} r={3} fill={stroke} opacity={0.7} />
          ) : (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r={3}
              fill={stroke}
              filter={`url(#td-glow-${variant})`}
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: [0, 1, 0.8], scale: [0.4, 1.4, 1] }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.12 }}
            />
          )
        )}
      </svg>
    </div>
  );
}
