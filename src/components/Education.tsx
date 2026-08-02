"use client";

import { education } from "@/data/portfolio";
import { Reveal, SectionHeader } from "./ui";

export default function Education() {
  return (
    <section id="education" className="py-14 md:py-16">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionHeader eyebrow="03 · Where I Studied" title="My" accent="Education" />

        <div className="grid md:grid-cols-3 gap-4 mt-3">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} y={i === 0 ? -50 : 50} delay={i * 0.1}>
              <div className="h-full rounded-2xl bg-white border border-ink/10 shadow-warm-sm p-7 hover:-translate-y-1.5 hover:border-bronze/35 hover:shadow-warm transition-all">
                <div className="text-3xl mb-3">{edu.icon}</div>
                <span className="inline-block font-mono text-[0.7rem] text-bronze bg-bronze/10 border border-bronze/30 px-2.5 py-0.5 rounded-full mb-3">
                  {edu.mode}
                </span>
                <h3 className="font-serif text-lg font-bold mb-1.5">{edu.degree}</h3>
                <p className="text-sm text-ink-soft mb-1">{edu.school}</p>
                <p className="font-mono text-xs text-bronze mb-3.5">{edu.period}</p>
                <ul className="space-y-2">
                  {edu.points.map((p) => (
                    <li key={p} className="relative pl-5 text-[0.85rem] text-ink-soft">
                      <span className="absolute left-0 text-bronze">▹</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
