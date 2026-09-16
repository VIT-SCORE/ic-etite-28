import type { SocialIcon } from "@/data/content";

// Footer icon primitive: maps the typed social icon names to compact inline SVG glyphs.

const common = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function SocialGlyph({ icon }: { icon: SocialIcon }) {
  switch (icon) {
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 11v6" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <path d="M14 8h-2a2 2 0 0 0-2 2v10M8 13h6" />
          <path d="M14 3h-1a4 4 0 0 0-4 4" opacity="0" />
        </svg>
      );
    case "email":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    default:
      return null;
  }
}
