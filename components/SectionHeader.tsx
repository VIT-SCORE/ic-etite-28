import Reveal from "./Reveal";

// Shared section heading: links each content block's label/title to the same animated visual treatment.

export default function SectionHeader({
  label,
  title,
  subtitle,
  accent = "cyan",
  titleClassName = "",
}: {
  label: string;
  title: string;
  subtitle?: string;
  accent?: "cyan" | "green";
  titleClassName?: string;
}) {
  const color = accent === "cyan" ? "text-cyan" : "text-electric-green";
  const line = accent === "cyan" ? "bg-cyan" : "bg-electric-green";

  return (
    <Reveal className="mb-6 md:mb-7">
      <div className="flex items-center gap-3">
        <span className={`h-px w-8 ${line} opacity-70`} />
        <span className={`mono-label ${color}`}>{label}</span>
      </div>
      <h2 className={`mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl lg:text-[2.75rem] ${titleClassName}`}>
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 font-mono text-sm text-muted">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}
