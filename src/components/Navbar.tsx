"use client";

import { useEffect, useState } from "react";

const items = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Certifications", "#certifications"],
  ["Achievements", "#achievements"],
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-colors ${
        scrolled ? "bg-cream/95 border-b border-ink/10" : "bg-cream/80 border-b border-transparent"
      }`}
    >
      <div className="mx-auto w-[92%] max-w-6xl h-[68px] flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 font-bold">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-charcoal text-gold-soft font-serif text-sm shadow-md">
            AK
          </span>
          <span className="font-serif hidden sm:inline">Amit Kumar Gupta</span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {items.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-ink-soft hover:text-ink hover:bg-ink/5 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold bg-charcoal text-cream-on-dark hover:bg-charcoal-2 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-ink rounded transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-ink rounded transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-ink rounded transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <ul className="lg:hidden bg-cream border-t border-ink/10 px-6 py-4 space-y-1">
          {[...items, ["Contact", "#contact"] as const].map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 rounded-lg font-medium text-ink-soft hover:text-ink hover:bg-ink/5"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
