import { heroStats, links } from "@/data/portfolio";
import { CountUp } from "./ui";

const roles = ["Full Stack Developer (Python)", "Angular · Django · FastAPI", "GenAI · RAG · AI Agents"];

const socials = [
  {
    label: "GitHub",
    href: links.github,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.66.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: links.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${links.email}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7L22 7" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <header id="home" className="relative min-h-svh flex items-center overflow-hidden pt-20 pb-10">
      <div className="absolute -top-32 -right-24 w-[480px] h-[480px] rounded-full bg-[#e9d3b3] blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute -bottom-36 -left-28 w-[420px] h-[420px] rounded-full bg-[#ddc7ac] blur-[120px] opacity-40 pointer-events-none" />

      <div className="relative mx-auto w-[92%] max-w-6xl grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
        {/* ── Left: identity ── */}
        <div>
          <p className="anim-rise font-mono text-sm text-bronze mb-3">Hi, my name is</p>

          <h1 className="anim-rise d-1 font-serif text-5xl md:text-6xl xl:text-7xl font-bold mb-4">
            Amit Kumar{" "}
            <span className="bg-gradient-to-r from-bronze-light to-bronze bg-clip-text text-transparent">Gupta</span>
          </h1>

          <div className="anim-rise d-2 flex flex-wrap gap-2 mb-5">
            {roles.map((r) => (
              <span
                key={r}
                className="px-3.5 py-1 rounded-full text-[0.82rem] font-semibold text-bronze bg-bronze/10 border border-bronze/30"
              >
                {r}
              </span>
            ))}
          </div>

          <p className="anim-rise d-3 max-w-xl text-ink-soft mb-6 leading-relaxed">
            I ship production software end-to-end — <strong className="text-ink">2+ years</strong> building with{" "}
            <strong className="text-ink">Python, Django REST, FastAPI, PostgreSQL and Angular 14+</strong>, plus a
            year of <strong className="text-ink">GenAI engineering</strong> (RAG, LangChain, AI agents). From a
            company-wide ERP to a rail compensation platform for{" "}
            <strong className="text-ink">12+ UK train operators</strong>, my systems serve up to{" "}
            <strong className="text-ink">2,000 concurrent users</strong>.
          </p>

          <div className="anim-rise d-4 flex flex-wrap gap-3 mb-6">
            <a
              href="#about"
              className="px-6 py-3 rounded-xl font-semibold bg-charcoal text-cream-on-dark shadow-lg hover:bg-charcoal-2 hover:-translate-y-0.5 transition-all"
            >
              Learn More About Me
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl font-semibold text-bronze border-[1.5px] border-bronze/40 hover:bg-bronze/10 hover:-translate-y-0.5 transition-all"
            >
              Get In Touch
            </a>
            <a
              href={links.resume}
              download
              className="px-6 py-3 rounded-xl font-semibold text-bronze border-[1.5px] border-bronze/40 hover:bg-bronze/10 hover:-translate-y-0.5 transition-all"
            >
              ⬇ Resume
            </a>
          </div>

          <div className="flex gap-3">
            {socials.map((s, i) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener"
                aria-label={s.label}
                className={`anim-pop d-${i + 4} grid place-items-center w-11 h-11 rounded-xl bg-white border border-ink/10 text-ink-soft hover:text-bronze hover:border-bronze/40 hover:-translate-y-1 transition-all shadow-warm-sm`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── Right: photo + stats ── */}
        <div className="hidden sm:block">
          <div className="anim-rise d-2 relative max-w-[330px] mx-auto lg:ml-auto">
            <div className="absolute -inset-3 rounded-[28px] border border-bronze/30 translate-x-3 translate-y-3" />
            <img
              src="assets/profile-photo.jpg"
              alt="Amit Kumar Gupta"
              fetchPriority="high"
              className="relative w-full aspect-[4/5] object-cover rounded-[24px] border border-ink/10 shadow-warm"
            />
            <p className="absolute bottom-3 left-3 right-3 text-center font-mono text-[0.7rem] text-cream-on-dark bg-charcoal/80 backdrop-blur-sm rounded-xl py-2">
              📍 Bhilai, Chhattisgarh, India
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 max-w-[360px] mx-auto lg:ml-auto mt-7">
            {heroStats.map((s, i) => (
              <div
                key={s.label}
                className={`anim-rise d-${i + 3} rounded-2xl bg-white/90 border border-ink/10 shadow-warm-sm px-3 py-3.5 text-center`}
              >
                <CountUp value={s.value} suffix={s.suffix} />
                <span className="block mt-0.5 text-[0.7rem] text-ink-soft">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute left-1/2 -translate-x-1/2 bottom-5 w-6 h-10 rounded-2xl border-2 border-ink-soft/50 hidden md:flex justify-center pt-1.5 opacity-60"
      >
        <span className="w-1 h-2 rounded bg-bronze animate-bounce" />
      </a>
    </header>
  );
}
