"use client";

import { motion } from "motion/react";
import { Reveal, SectionHeader } from "./ui";

const chips = [
  ["💼 Work Experience", "#experience"],
  ["🎓 Education", "#education"],
  ["🛠 Projects", "#projects"],
  ["⚡ Skills", "#skills"],
  ["📜 Certifications", "#certifications"],
] as const;

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionHeader eyebrow="01 · Who I Am" title="About" accent="Me" />

        <div className="grid md:grid-cols-[320px_1fr] gap-12 items-start mt-8">
          <Reveal x={-60} y={0} className="md:sticky md:top-24">
            <div className="rounded-3xl overflow-hidden border border-ink/10 shadow-warm relative">
              <img
                src="assets/profile-photo.jpg"
                alt="Amit Kumar Gupta"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <p className="mt-3.5 text-center font-mono text-xs text-ink-soft py-2.5 border border-dashed border-ink/25 rounded-xl bg-paper">
              Bhilai, Chhattisgarh, India
            </p>
          </Reveal>

          <div>
            <div className="space-y-4 text-ink-soft leading-relaxed">
              <Reveal>
                <p>
                  I&apos;m a <strong className="text-ink">Full Stack Developer (Python)</strong> at{" "}
                  <strong className="text-ink">Divyal Technology Pvt. Ltd.</strong>, where I&apos;ve spent the last two
                  years building and shipping production software — ERP/CRM systems, a parking management platform,
                  ticketing and e-commerce products, and <strong className="text-ink">RailPay</strong>, a multi-tenant
                  &quot;Delay Repay&quot; compensation platform serving 12+ UK train operating companies.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <p>
                  On the backend I work in{" "}
                  <strong className="text-ink">Python with Django REST Framework and FastAPI</strong> — designing
                  PostgreSQL schemas, securing APIs with JWT and role-based access control, and squeezing out
                  performance with query optimization, Redis caching and async task queues (40% faster response times
                  on the systems I&apos;ve tuned). On the frontend I build{" "}
                  <strong className="text-ink">Angular 14+ / TypeScript</strong> single-page applications with RxJS
                  real-time dashboards, reactive forms and lazy-loaded modules.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p>
                  For the past year I&apos;ve also been deep in <strong className="text-ink">Generative AI</strong> —
                  building RAG chatbots over private document sets with LangChain and vector databases (FAISS,
                  ChromaDB), and multi-agent workflows with LangGraph, CrewAI and MCP. I hold a{" "}
                  <strong className="text-ink">PG Diploma in Advanced Computing from C-DAC ACTS Pune (Grade A)</strong>{" "}
                  and a B.Tech in Computer Science. What sets me apart: I own features end-to-end — schema, API, UI,
                  deployment — and I measure my work in numbers, not adjectives.
                </p>
              </Reveal>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 my-7">
              {[
                {
                  h: "🎯 Mission",
                  p: "To build software that is fast, secure and genuinely useful — turning complex business workflows into clean, reliable systems that people depend on every day.",
                },
                {
                  h: "🚀 Vision",
                  p: "To grow into an engineer who bridges classic full-stack craftsmanship with applied AI — shipping intelligent products that raise the bar for what web applications can do.",
                },
              ].map((c, i) => (
                <motion.div
                  key={c.h}
                  className="rounded-2xl bg-white border border-ink/10 shadow-warm-sm p-6 hover:-translate-y-1 hover:border-bronze/35 transition-all"
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="font-serif font-bold mb-2">{c.h}</h3>
                  <p className="text-sm text-ink-soft">{c.p}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2.5">
              {chips.map(([label, href], i) => (
                <Reveal key={href} delay={i * 0.07} y={18}>
                  <a
                    href={href}
                    className="inline-block px-4 py-2.5 rounded-xl text-sm font-semibold bg-white border border-ink/10 shadow-warm-sm hover:-translate-y-0.5 hover:border-bronze/40 transition-all"
                  >
                    {label}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
