"use client";

import { experience } from "@/data/portfolio";
import { Reveal, SectionHeader } from "./ui";

export default function Experience() {
  return (
    <section id="experience" className="py-14 md:py-16 bg-cream-deep overflow-x-clip">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionHeader eyebrow="02 · Where I've Worked" title="Work" accent="Experience" />

        {experience.map((xp, i) => (
          <Reveal key={xp.company} x={i % 2 === 0 ? -60 : 60} y={0}>
            <div className="grid md:grid-cols-[270px_1fr] rounded-2xl overflow-hidden border border-ink/10 bg-white shadow-warm mt-5 hover:-translate-y-1.5 hover:border-bronze/35 transition-all">
              <div className="p-7 bg-gradient-to-br from-charcoal to-charcoal-2 text-cream-on-dark">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-[0.68rem] font-bold uppercase tracking-wider mb-3.5 border ${
                    xp.badge === "Full-time"
                      ? "text-gold-soft border-gold-soft/40 bg-gold-soft/15"
                      : "text-gold-soft/80 border-gold-soft/25 bg-gold-soft/8"
                  }`}
                >
                  {xp.badge}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#fbf7f0] mb-1.5">{xp.role}</h3>
                <p className="text-[#d8b98c] font-semibold mb-3">{xp.company}</p>
                <p className="font-mono text-xs leading-loose text-cream-on-dark/65">
                  📍 {xp.location}
                  <br />
                  🗓 {xp.period}
                </p>
              </div>
              <div className="p-7 md:p-8">
                {xp.sections.map((sec) => (
                  <div key={sec.heading}>
                    <h4 className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-bronze mt-4 first:mt-0 mb-2.5">
                      {sec.heading}
                    </h4>
                    <ul className="space-y-2">
                      {sec.items.map((item) => (
                        <li key={item} className="relative pl-5 text-sm text-ink-soft">
                          <span className="absolute left-0 text-bronze">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
