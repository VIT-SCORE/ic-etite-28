"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

/* -------------------------------------------------------------------------- */
/* Trace + node data                                                           */
/* -------------------------------------------------------------------------- */
/*
 * Everything is authored against a 1440 x 900 viewBox and rendered with
 * preserveAspectRatio="xMidYMid slice", so it fills any screen. Traces mix
 * orthogonal runs with 45-degree jogs to read like real PCB routing.
 */

type Trace = {
  d: string;
  color: "cyan" | "green";
  /** ambient pulse travel time in seconds — different per trace = different speeds */
  speed: number;
  /** delay so pulses don't all fire together */
  delay: number;
  /** base stroke opacity of the (non-pulsing) trace line */
  baseOpacity: number;
  /** drop on small screens to reduce density */
  desktopOnly?: boolean;
};

const CYAN = "#00E5FF";
const GREEN = "#00FF9C";

const TRACES: Trace[] = [
  // Horizontal arteries
  { d: "M -60 130 H 300 L 360 190 H 760 L 820 130 H 1500", color: "cyan", speed: 7.5, delay: 0, baseOpacity: 0.5 },
  { d: "M -60 300 H 210 L 270 360 H 560 L 620 300 H 940 L 1000 360 H 1500", color: "green", speed: 11, delay: 1.2, baseOpacity: 0.4 },
  { d: "M -60 620 H 260 L 340 700 H 720 L 800 620 H 1500", color: "cyan", speed: 9, delay: 2.4, baseOpacity: 0.42 },
  { d: "M -60 790 H 480 L 540 730 H 900 L 960 790 H 1500", color: "green", speed: 13, delay: 0.6, baseOpacity: 0.34, desktopOnly: true },
  // Verticals / drops that connect the arteries
  { d: "M 200 -60 V 210 L 260 270 V 520 L 200 580 V 960", color: "cyan", speed: 10, delay: 1.8, baseOpacity: 0.36 },
  { d: "M 1080 -60 V 200 L 1020 260 V 540 L 1080 600 V 960", color: "green", speed: 8.5, delay: 0.9, baseOpacity: 0.36, desktopOnly: true },
  // Angled PCB routes
  { d: "M -60 470 L 320 470 L 480 310 L 860 310 L 1020 470 L 1500 470", color: "cyan", speed: 12, delay: 3.1, baseOpacity: 0.4 },
  { d: "M 620 -60 L 620 180 L 760 320 L 760 560 L 900 700 L 900 960", color: "green", speed: 9.5, delay: 2.0, baseOpacity: 0.3, desktopOnly: true },
];

// Junction nodes — flash occasionally, out of sync via deterministic delays.
type Node = { x: number; y: number; color: "cyan" | "green"; desktopOnly?: boolean };
const NODES: Node[] = [
  { x: 360, y: 190, color: "cyan" },
  { x: 820, y: 130, color: "cyan" },
  { x: 270, y: 360, color: "green" },
  { x: 620, y: 300, color: "green" },
  { x: 340, y: 700, color: "cyan" },
  { x: 800, y: 620, color: "cyan" },
  { x: 260, y: 270, color: "cyan", desktopOnly: true },
  { x: 1020, y: 260, color: "green", desktopOnly: true },
  { x: 480, y: 310, color: "cyan" },
  { x: 860, y: 310, color: "cyan", desktopOnly: true },
  { x: 760, y: 320, color: "green", desktopOnly: true },
  { x: 900, y: 700, color: "green" },
  { x: 540, y: 730, color: "green", desktopOnly: true },
];

const hex = (c: "cyan" | "green") => (c === "cyan" ? CYAN : GREEN);

/* -------------------------------------------------------------------------- */
/* Scroll-reactive pulse (offset bound directly to scroll progress)            */
/* -------------------------------------------------------------------------- */

function ScrollPulse({
  d,
  color,
  progress,
  from,
  to,
}: {
  d: string;
  color: "cyan" | "green";
  progress: MotionValue<number>;
  from: number;
  to: number;
}) {
  const offset = useTransform(progress, [0, 1], [from, to]);
  return (
    <motion.path
      d={d}
      pathLength={100}
      fill="none"
      stroke={hex(color)}
      strokeWidth={2}
      strokeLinecap="round"
      strokeDasharray="10 90"
      style={{ strokeDashoffset: offset }}
      filter="url(#pulse-glow)"
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Component                                                                    */
/* -------------------------------------------------------------------------- */

export default function CircuitBackground() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll();

  // Parallax: grid drifts up, whole board eases as you scroll.
  const gridY = useTransform(scrollYProgress, [0, 1], ["0px", "-120px"]);
  const boardY = useTransform(scrollYProgress, [0, 1], ["0px", "40px"]);
  // Traces get subtly brighter deeper into the page.
  const traceGroupOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.95]);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const animate = mounted && !prefersReducedMotion;

  const visibleTraces = TRACES.filter((t) => !(isMobile && t.desktopOnly));
  const visibleNodes = NODES.filter((n) => !(isMobile && n.desktopOnly));

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base"
    >
      {/* Depth wash so the board recedes and text stays readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% -10%, rgba(0,229,255,0.06), transparent 55%), radial-gradient(90% 80% at 90% 110%, rgba(0,255,156,0.05), transparent 55%)",
        }}
      />

      {/* Parallax circuit grid */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: animate ? gridY : 0,
          backgroundImage:
            "linear-gradient(rgba(0,229,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.06) 1px, transparent 1px)",
          backgroundSize: isMobile ? "56px 56px" : "72px 72px",
          maskImage:
            "radial-gradient(120% 100% at 50% 30%, black 55%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(120% 100% at 50% 30%, black 55%, transparent 100%)",
          opacity: 0.5,
        }}
      />

      {/* The PCB itself */}
      <motion.svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        style={{ y: animate ? boardY : 0 }}
      >
        <defs>
          <filter id="trace-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="pulse-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.g
          style={{ opacity: animate ? traceGroupOpacity : 0.5 }}
        >
          {/* Base traces (faint, glowing) */}
          {visibleTraces.map((t, i) => (
            <path
              key={`base-${i}`}
              d={t.d}
              fill="none"
              stroke={hex(t.color)}
              strokeWidth={1.4}
              strokeOpacity={t.baseOpacity}
              filter="url(#trace-glow)"
            />
          ))}

          {/* Ambient travelling pulses — continuous, different speeds */}
          {animate &&
            visibleTraces.map((t, i) => (
              <motion.path
                key={`pulse-${i}`}
                d={t.d}
                pathLength={100}
                fill="none"
                stroke={hex(t.color)}
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeDasharray="7 93"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: [100, 0] }}
                transition={{
                  duration: t.speed,
                  delay: t.delay,
                  ease: "linear",
                  repeat: Infinity,
                }}
                filter="url(#pulse-glow)"
              />
            ))}

          {/* Scroll-bound pulses — travel with scroll progress */}
          {animate && (
            <>
              <ScrollPulse d={TRACES[0].d} color="cyan" progress={scrollYProgress} from={100} to={-10} />
              <ScrollPulse d={TRACES[2].d} color="green" progress={scrollYProgress} from={110} to={0} />
              {!isMobile && (
                <ScrollPulse d={TRACES[6].d} color="cyan" progress={scrollYProgress} from={120} to={-10} />
              )}
            </>
          )}

          {/* Junction nodes */}
          {visibleNodes.map((n, i) => (
            <g key={`node-${i}`}>
              <circle cx={n.x} cy={n.y} r={4.5} fill={hex(n.color)} opacity={0.18} />
              <circle
                cx={n.x}
                cy={n.y}
                r={2.6}
                fill={hex(n.color)}
                className={animate ? "animate-node-flash" : ""}
                style={
                  animate
                    ? { animationDelay: `${(i * 0.73) % 4}s`, transformBox: "fill-box", transformOrigin: "center" }
                    : { opacity: 0.5 }
                }
                filter="url(#pulse-glow)"
              />
            </g>
          ))}
        </motion.g>
      </motion.svg>

      {/* Final readability veil */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,7,10,0.35) 0%, rgba(5,7,10,0.15) 40%, rgba(5,7,10,0.55) 100%)",
        }}
      />
    </div>
  );
}
