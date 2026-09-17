"use client";

import { useEffect, useState } from "react";

function SunIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M20.5 15.2A8.5 8.5 0 0 1 8.8 3.5 8.5 8.5 0 1 0 20.5 15.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("ic-etite-theme");
    const nextDark = saved === "dark";

    document.documentElement.classList.toggle("dark", nextDark);
    setDark(nextDark);
    setMounted(true);
  }, []);

  function toggleTheme() {
    const nextDark = !dark;
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("ic-etite-theme", nextDark ? "dark" : "light");
    setDark(nextDark);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={mounted && dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={mounted ? dark : false}
      className="relative flex h-9 w-16 items-center rounded-full border border-[var(--border)] bg-[var(--surface-2)] p-1 text-[var(--text-muted)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent-cyan)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
    >
      <span className={`flex h-7 w-7 items-center justify-center rounded-full bg-[var(--surface)] shadow-sm transition-transform duration-300 ${mounted && dark ? "translate-x-7 text-[var(--accent-cyan)]" : "translate-x-0 text-[var(--accent-red)]"}`}>
        {mounted && dark ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );
}