"use client";

import { motion, useInView, animate } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  x = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  x?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-serif text-3xl font-bold bg-gradient-to-r from-bronze-light to-bronze bg-clip-text text-transparent">
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  accent,
  sub,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  sub?: string;
}) {
  return (
    <Reveal>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-bronze mb-3">{eyebrow}</p>
      <h2 className="font-serif text-4xl md:text-5xl font-bold mb-5">
        {title} <span className="bg-gradient-to-r from-bronze-light to-bronze bg-clip-text text-transparent">{accent}</span>
      </h2>
      {sub && <p className="text-ink-soft max-w-2xl mb-10">{sub}</p>}
    </Reveal>
  );
}

export function StatGrid({ stats }: { stats: { value: number; suffix: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.1}>
          <div className="rounded-2xl bg-white border border-ink/10 shadow-warm-sm px-4 py-5 text-center">
            <CountUp value={s.value} suffix={s.suffix} />
            <span className="block mt-1 text-xs text-ink-soft">{s.label}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
