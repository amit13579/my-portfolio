"use client";

import { motion, useInView, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { skills } from "@/data/portfolio";
import { SectionHeader } from "./ui";

function SkillRow({ name, pct, delay }: { name: string; pct: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, pct, {
      duration: 1,
      delay,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, pct, delay]);

  return (
    <div ref={ref} className="mb-3.5">
      <div className="flex justify-between items-baseline mb-1">
        <span className="text-sm text-ink-soft">{name}</span>
        <b className="font-mono text-xs text-bronze">{display}%</b>
      </div>
      <div className="h-[7px] rounded-md bg-ink/10 overflow-hidden">
        <motion.i
          className="block h-full rounded-md bg-gradient-to-r from-bronze-light to-bronze"
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-14 md:py-16">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionHeader eyebrow="05 · What I Work With" title="Technical" accent="Skills" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
          {skills.map((cat, i) => (
            <motion.div
              key={cat.category}
              className="rounded-2xl bg-white border border-ink/10 shadow-warm-sm p-6 hover:-translate-y-1.5 hover:shadow-warm hover:border-bronze/35 transition-all group"
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="font-serif font-bold flex items-center gap-2.5 mb-4">
                <span className="grid place-items-center w-9 h-9 rounded-xl bg-bronze/10 group-hover:rotate-[360deg] transition-transform duration-700">
                  {cat.icon}
                </span>
                {cat.category}
              </h3>
              {cat.rows.map(([name, pct], j) => (
                <SkillRow key={name} name={name} pct={pct} delay={j * 0.08} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
