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
    <section id="about" className="py-14 md:py-16">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionHeader eyebrow="01 · Who I Am" title="About" accent="Me" />

        <div className="grid lg:grid-cols-2 gap-x-10 gap-y-4 text-ink-soft leading-relaxed text-[0.95rem] mt-2">
          <Reveal>
            <p>
              I&apos;m a <strong className="text-ink">Full Stack Developer (Python)</strong> at{" "}
              <strong className="text-ink">Divyal Technology Pvt. Ltd.</strong> — two years building and shipping
              production software: ERP/CRM systems, a parking management platform, ticketing and e-commerce products,
              and <strong className="text-ink">RailPay</strong>, a multi-tenant &quot;Delay Repay&quot; compensation
              platform serving 12+ UK train operating companies. On the backend I design PostgreSQL schemas, secure
              APIs with JWT and RBAC, and tune performance with query optimization, Redis caching and async queues —
              40% faster response times on the systems I&apos;ve tuned.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              On the frontend I build <strong className="text-ink">Angular 14+ / TypeScript</strong> SPAs with RxJS
              real-time dashboards and lazy-loaded modules. For the past year I&apos;ve been deep in{" "}
              <strong className="text-ink">Generative AI</strong> — RAG chatbots with LangChain and vector databases,
              multi-agent workflows with LangGraph, CrewAI and MCP. I hold a{" "}
              <strong className="text-ink">PG-DAC from C-DAC ACTS Pune (Grade A)</strong> and a B.Tech in Computer
              Science. What sets me apart: I own features end-to-end — schema, API, UI, deployment — and I measure my
              work in numbers, not adjectives.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 my-6">
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
              className="rounded-2xl bg-white border border-ink/10 shadow-warm-sm p-5 hover:-translate-y-1 hover:border-bronze/35 transition-all"
              initial={{ opacity: 0, y: 26, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="font-serif font-bold mb-1.5">{c.h}</h3>
              <p className="text-sm text-ink-soft">{c.p}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2.5">
          {chips.map(([label, href], i) => (
            <Reveal key={href} delay={i * 0.06} y={14}>
              <a
                href={href}
                className="inline-block px-4 py-2 rounded-xl text-sm font-semibold bg-white border border-ink/10 shadow-warm-sm hover:-translate-y-0.5 hover:border-bronze/40 transition-all"
              >
                {label}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
