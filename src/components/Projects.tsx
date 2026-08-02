"use client";

import { motion } from "motion/react";
import { projects } from "@/data/portfolio";
import { Reveal, SectionHeader } from "./ui";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-cream-deep">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionHeader eyebrow="04 · What I've Built" title="Featured" accent="Projects" />

        {projects.map((p) => (
          <Reveal key={p.num}>
            <article className="grid md:grid-cols-[290px_1fr] rounded-2xl overflow-hidden border border-ink/10 bg-white shadow-warm mt-8 hover:-translate-y-1.5 hover:border-bronze/35 transition-all group">
              <div className="p-7 bg-gradient-to-br from-charcoal to-[#423a31] text-cream-on-dark flex flex-col gap-3">
                <span className="font-mono text-4xl font-semibold text-[#d8b98c]/40">{p.num}</span>
                <span className="text-[0.7rem] font-bold uppercase tracking-widest text-[#d8b98c]">{p.type}</span>
                <h3 className="font-serif text-2xl font-bold text-[#fbf7f0] group-hover:tracking-wide transition-all">
                  {p.title}
                </h3>
              </div>
              <div className="p-7 md:p-8">
                <p className="text-sm text-ink-soft mb-5 leading-relaxed">{p.desc}</p>
                <div className="grid sm:grid-cols-2 gap-3 mb-5">
                  {p.outcomes.map((o, j) => (
                    <motion.div
                      key={o}
                      className="flex gap-3 items-start p-3.5 rounded-xl bg-paper border border-ink/10 text-[0.83rem] text-ink-soft"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.4, delay: 0.15 + j * 0.1, type: "spring", bounce: 0.35 }}
                    >
                      <span className="shrink-0 grid place-items-center w-6 h-6 rounded-lg bg-bronze/10 text-bronze font-mono font-semibold text-xs">
                        {j + 1}
                      </span>
                      {o}
                    </motion.div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t, j) => (
                    <motion.span
                      key={t}
                      className="px-3 py-1 rounded-full font-mono text-xs font-semibold text-bronze bg-bronze/10 border border-bronze/30 hover:bg-bronze/20 hover:-translate-y-0.5 transition-all"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: 0.35 + j * 0.05, type: "spring", stiffness: 300, damping: 14 }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
