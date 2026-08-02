"use client";

import { motion } from "motion/react";
import { skills } from "@/data/portfolio";
import { SectionHeader } from "./ui";

/* pct >= 85 in the data marks a core, used-daily-in-production skill */
const CORE_THRESHOLD = 85;

export default function Skills() {
  return (
    <section id="skills" className="py-14 md:py-16">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionHeader eyebrow="05 · What I Work With" title="Technical" accent="Skills" />
        <p className="flex items-center gap-2 font-mono text-xs text-ink-soft -mt-2 mb-4">
          <span className="inline-block w-2 h-2 rounded-full bg-bronze" />
          core stack — used daily in production
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
          {skills.map((cat, i) => (
            <motion.div
              key={cat.category}
              className="rounded-2xl bg-white border border-ink/10 shadow-warm-sm p-6 hover:-translate-y-1.5 hover:shadow-warm hover:border-bronze/35 transition-all group"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="font-serif font-bold flex items-center gap-2.5 mb-4">
                <span className="grid place-items-center w-9 h-9 rounded-xl bg-bronze/10 group-hover:rotate-[360deg] transition-transform duration-700">
                  {cat.icon}
                </span>
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.rows.map(([name, pct], j) => {
                  const core = pct >= CORE_THRESHOLD;
                  return (
                    <motion.span
                      key={name}
                      className={
                        core
                          ? "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.82rem] font-semibold text-bronze bg-bronze/10 border border-bronze/35"
                          : "inline-flex items-center px-3 py-1.5 rounded-full text-[0.82rem] font-medium text-ink-soft bg-paper border border-ink/10"
                      }
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: 0.15 + j * 0.04, type: "spring", stiffness: 300, damping: 18 }}
                    >
                      {core && <span className="w-1.5 h-1.5 rounded-full bg-bronze" />}
                      {name}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
