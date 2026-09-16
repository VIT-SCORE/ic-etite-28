import Reveal from "./Reveal";

// Shared section heading: links each content block's label/title to the same animated visual treatment.

export default function SectionHeader({
  label,
  title,
  subtitle,
  accent = "cyan",
}: {
  label: string;
  title: string;
  subtitle?: string;
  accent?: "cyan" | "green";
}) {
  const color = accent === "cyan" ? "text-cyan" : "text-electric-green";
  const line = accent === "cyan" ? "bg-cyan" : "bg-electric-green";

  return (
    <Reveal className="mb-8 md:mb-12">
      <div className="flex items-center gap-3">
        <span className={`h-px w-8 ${line} opacity-70`} />
        <span className={`mono-label ${color}`}>{label}</span>
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 font-mono text-sm text-muted">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}
