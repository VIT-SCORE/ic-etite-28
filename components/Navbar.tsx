"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_ITEMS, DEADLINE_NOTICE, BRAND, type NavItem } from "@/data/content";

function Logo() {
  return (
    <a href="#home" className="group flex items-center gap-3">
      {/* Drop the final logo at public/assets/logo.svg to replace this automatically. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={BRAND.logo}
        alt={`${BRAND.name} logo`}
        width={40}
        height={40}
        className="h-10 w-10 transition group-hover:drop-shadow-[0_0_10px_rgba(0,229,255,0.7)]"
      />
      <span className="font-display text-lg font-bold tracking-tight text-ink">
        ic-ETITE <span className="text-cyan">&apos;28</span>
      </span>
    </a>
  );
}

function DesktopItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  if (item.children) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          className="flex items-center gap-1 py-2 font-mono text-[0.8rem] tracking-wide text-muted transition-colors hover:text-cyan"
          aria-expanded={open}
        >
          {item.label}
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className={`transition-transform ${open ? "rotate-180" : ""}`}>
            <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.16 }}
              className="glass-panel panel-ticks absolute left-0 top-full mt-2 w-52 overflow-hidden p-1.5"
            >
              {item.children.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="block rounded-md px-3 py-2 font-mono text-[0.8rem] text-muted transition-colors hover:bg-cyan/10 hover:text-cyan"
                >
                  {c.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <a
      href={item.href}
      className="relative py-2 font-mono text-[0.8rem] tracking-wide text-muted transition-colors hover:text-cyan"
    >
      {item.label}
    </a>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="navbar">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
          <Logo />

          <div className="hidden items-center gap-6 xl:flex">
            {NAV_ITEMS.map((item) => (
              <DesktopItem key={item.label} item={item} />
            ))}
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-md border border-cyan/20 text-cyan xl:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <div className="relative h-4 w-5">
              <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${mobileOpen ? "top-2 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition-all ${mobileOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${mobileOpen ? "top-2 -rotate-45" : "top-4"}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-cyan/10 bg-surface xl:hidden"
            >
              <div className="max-h-[70vh] space-y-1 overflow-y-auto px-5 py-4">
                {NAV_ITEMS.map((item) =>
                  item.children ? (
                    <div key={item.label} className="py-1">
                      <p className="mono-label mb-1 text-cyan">{item.label}</p>
                      <div className="ml-3 border-l border-cyan/15 pl-3">
                        {item.children.map((c) => (
                          <a
                            key={c.label}
                            href={c.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-1.5 font-mono text-sm text-muted hover:text-cyan"
                          >
                            {c.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 font-mono text-sm text-muted hover:text-cyan"
                    >
                      {item.label}
                    </a>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Deadline / alert strip — editable via DEADLINE_NOTICE */}
      <div className="announcement-bar">
        <span className="h-1.5 w-1.5 flex-shrink-0 animate-pulse rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
        <p className="font-mono text-[0.72rem] tracking-wide text-white md:text-xs">
          {DEADLINE_NOTICE.text}
          {DEADLINE_NOTICE.placeholder && (
            <span className="ml-2 rounded border border-white/60 px-1.5 py-0.5 text-[0.6rem] text-white">
              2024 · PLACEHOLDER
            </span>
          )}
        </p>
      </div>
    </header>
  );
}
