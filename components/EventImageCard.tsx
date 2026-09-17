import Image from "next/image";

type EventImageCardProps = {
  title?: string;
  subtitle?: string;
  image?: string;
  aspectRatio?: "landscape" | "portrait" | "square";
  className?: string;
};

const aspectClasses = {
  landscape: "aspect-[16/10]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
} as const;

export default function EventImageCard({
  title = "Previous Event",
  subtitle = "ARCHIVE · PHOTO",
  image = "",
  aspectRatio = "landscape",
  className = "",
}: EventImageCardProps) {
  return (
    <figure className={`event-image-card ${aspectClasses[aspectRatio]} ${className}`}>
      {image ? (
        <>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="event-image-card__image"
          />
          <div aria-hidden="true" className="event-image-card__overlay" />
        </>
      ) : (
        <div className="event-image-card__placeholder" aria-label={`${title} photo placeholder`}>
          <span className="event-image-card__trace event-image-card__trace--top" aria-hidden="true" />
          <span className="event-image-card__node event-image-card__node--top" aria-hidden="true" />
          <span className="event-image-card__trace event-image-card__trace--bottom" aria-hidden="true" />
          <span className="event-image-card__node event-image-card__node--bottom" aria-hidden="true" />
          <div className="relative z-10 px-5 text-center">
            <p className="font-mono text-[0.68rem] font-semibold tracking-[0.12em] text-[var(--accent-cyan)]">{subtitle}</p>
            <p className="mt-3 font-display text-xl font-semibold text-[var(--text-primary)]">{title}</p>
            <p className="mt-2 font-mono text-[0.62rem] tracking-[0.12em] text-[var(--text-secondary)]">PHOTO AREA</p>
          </div>
        </div>
      )}
    </figure>
  );
}
