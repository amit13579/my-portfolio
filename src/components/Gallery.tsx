"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { certifications, achievements, achievementStats } from "@/data/portfolio";
import { Reveal, SectionHeader, StatGrid } from "./ui";

function Lightbox({ src, onClose }: { src: string | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {src && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1c1814]/90 p-[4vh_4vw] cursor-zoom-out"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            className="absolute top-4 right-7 text-white text-4xl leading-none"
            aria-label="Close"
            onClick={onClose}
          >
            ×
          </button>
          <motion.img
            src={src}
            alt="Certificate — full size"
            className="max-w-[92vw] max-h-[90vh] rounded-xl shadow-2xl"
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Certifications() {
  const [zoom, setZoom] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-14 md:py-16 bg-cream-deep">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionHeader eyebrow="06 · Proof of Learning" title="My" accent="Certifications" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              className="rounded-2xl overflow-hidden bg-white border border-ink/10 shadow-warm-sm cursor-zoom-in hover:border-bronze/40 hover:shadow-warm hover:bg-paper transition-all group"
              onClick={() => setZoom(c.img)}
              initial={{ opacity: 0, y: 55, rotate: i % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="h-52 overflow-hidden bg-white border-b border-ink/10">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[3000ms]"
                />
              </div>
              <div className="p-5">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[0.68rem] font-bold uppercase tracking-wide text-bronze bg-bronze/10 border border-bronze/30 mb-2.5">
                  {c.provider}
                </span>
                <h3 className="font-serif font-bold mb-1">{c.title}</h3>
                <p className="font-mono text-xs text-ink-soft mb-2">{c.date}</p>
                <p className="text-[0.83rem] text-ink-soft">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center font-mono text-xs text-ink-soft/70 mt-8">Click any certificate to view it full size.</p>
      </div>
      <Lightbox src={zoom} onClose={() => setZoom(null)} />
    </section>
  );
}

export function Achievements() {
  const [zoom, setZoom] = useState<string | null>(null);

  return (
    <section id="achievements" className="py-14 md:py-16">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionHeader
          eyebrow="07 · Recognition"
          title="Achievements"
          accent="& Recognition"
          sub="Milestones that shaped me — from competitive internships to production impact."
        />

        <div className="mb-8">
          <StatGrid stats={achievementStats} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              className="rounded-2xl overflow-hidden bg-white border border-ink/10 shadow-warm-sm cursor-zoom-in hover:-translate-y-1.5 hover:border-bronze/45 hover:shadow-warm transition-all group"
              onClick={() => setZoom(a.img)}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.13, type: "spring", bounce: 0.4 }}
            >
              <div className="h-48 overflow-hidden bg-white border-b border-ink/10">
                <img
                  src={a.img}
                  alt={a.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-[6000ms]"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-2.5">
                  <span className="px-3 py-0.5 rounded-full text-[0.68rem] font-bold uppercase tracking-wide text-[#8a6425] bg-bronze-light/15 border border-bronze-light/40">
                    {a.badge}
                  </span>
                  <span className="font-mono text-xs text-ink-soft">{a.year}</span>
                </div>
                <h3 className="font-serif font-bold mb-0.5">{a.title}</h3>
                <p className="text-sm font-semibold text-bronze mb-2">{a.org}</p>
                <p className="text-[0.83rem] text-ink-soft">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Lightbox src={zoom} onClose={() => setZoom(null)} />
    </section>
  );
}
