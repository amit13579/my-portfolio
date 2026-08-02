import { links } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream-deep py-11 text-center">
      <p className="flex items-center justify-center gap-2.5 font-serif font-bold text-lg mb-2.5">
        <span className="grid place-items-center w-9 h-9 rounded-xl bg-charcoal text-gold-soft font-serif text-sm">
          AK
        </span>
        Amit Kumar Gupta
      </p>
      <p className="text-sm text-ink-soft mb-4">
        Building fast, secure, intelligent web applications — end to end.
      </p>
      <div className="flex justify-center gap-6 mb-5 text-sm font-semibold text-ink-soft">
        <a href={links.github} target="_blank" rel="noopener" className="hover:text-bronze transition-colors">
          GitHub
        </a>
        <a href={links.linkedin} target="_blank" rel="noopener" className="hover:text-bronze transition-colors">
          LinkedIn
        </a>
        <a href={`mailto:${links.email}`} className="hover:text-bronze transition-colors">
          Email
        </a>
      </div>
      <p className="font-mono text-xs text-ink-soft/60">
        © 2026 Amit Kumar Gupta · Built with Next.js, Tailwind CSS &amp; Motion
      </p>
    </footer>
  );
}
