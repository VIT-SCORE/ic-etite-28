import type { Metadata, Viewport } from "next";
import { BRAND } from "@/data/content";

// Root document wrapper: loads self-hosted fonts and the global theme stylesheet for every route.

// Self-hosted fonts (no runtime/network dependency). These register the
// font-family names referenced by the --font-* variables in globals.css.
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";

import "./globals.css";

export const metadata: Metadata = {
  title: `${BRAND.name} — International Conference on Emerging Trends in IT & Engineering`,
  description:
    "ic-ETITE '28 — International Conference on Emerging Trends in Information Technology and Engineering, hosted at VIT Vellore and technically co-sponsored by IEEE.",
};

export const viewport: Viewport = {
  themeColor: "#05070A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
