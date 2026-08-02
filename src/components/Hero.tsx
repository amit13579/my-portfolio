"use client";

import { motion } from "motion/react";
import { heroStats, links } from "@/data/portfolio";
import { StatGrid } from "./ui";

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
    <header id="home" className="relative min-h-svh flex items-center overflow-hidden pt-28 pb-20">
      <div className="absolute -top-32 -right-24 w-[480px] h-[480px] rounded-full bg-[#e9d3b3] blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute -bottom-36 -left-28 w-[420px] h-[420px] rounded-full bg-[#ddc7ac] blur-[120px] opacity-40 pointer-events-none" />

      <div className="relative mx-auto w-[92%] max-w-6xl">
        <motion.p
          className="font-mono text-sm text-bronze mb-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          className="font-serif text-5xl md:text-7xl font-bold mb-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          Amit Kumar{" "}
          <span className="bg-gradient-to-r from-bronze-light to-bronze bg-clip-text text-transparent">Gupta</span>
        </motion.h1>

        <motion.div
          className="flex flex-wrap gap-2.5 mb-7"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
        >
          {roles.map((r) => (
            <span
              key={r}
              className="px-4 py-1.5 rounded-full text-sm font-semibold text-bronze bg-bronze/10 border border-bronze/30"
            >
              {r}
            </span>
          ))}
        </motion.div>

        <motion.p
          className="max-w-3xl text-ink-soft mb-9 leading-relaxed"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36 }}
        >
          I&apos;m a Full Stack Developer with <strong className="text-ink">2+ years</strong> of experience shipping
          production applications in{" "}
          <strong className="text-ink">Python, Django REST Framework, FastAPI, PostgreSQL and Angular 14+</strong>,
          plus a year of hands-on <strong className="text-ink">Generative AI</strong> engineering — LLMs, RAG
          pipelines, LangChain and autonomous AI agents. At Divyal Technology I&apos;ve delivered{" "}
          <strong className="text-ink">4+ production systems</strong> serving up to{" "}
          <strong className="text-ink">2,000 concurrent users</strong> — from a company-wide ERP procurement module to
          a multi-tenant rail compensation platform for 12+ UK train operators. If you&apos;re looking for someone who
          can own a feature from database schema to polished UI — let&apos;s talk.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3.5 mb-9"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.48 }}
        >
          <a
            href="#about"
            className="px-7 py-3 rounded-xl font-semibold bg-charcoal text-cream-on-dark shadow-lg hover:bg-charcoal-2 hover:-translate-y-0.5 transition-all"
          >
            Learn More About Me
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-xl font-semibold text-bronze border-[1.5px] border-bronze/40 hover:bg-bronze/10 hover:-translate-y-0.5 transition-all"
          >
            Get In Touch
          </a>
          <a
            href={links.resume}
            download
            className="px-7 py-3 rounded-xl font-semibold text-bronze border-[1.5px] border-bronze/40 hover:bg-bronze/10 hover:-translate-y-0.5 transition-all"
          >
            ⬇ Download Resume
          </a>
        </motion.div>

        <div className="flex gap-3.5 mb-12">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener"
              aria-label={s.label}
              className="grid place-items-center w-11 h-11 rounded-xl bg-white border border-ink/10 text-ink-soft hover:text-bronze hover:border-bronze/40 hover:-translate-y-1 transition-all shadow-warm-sm"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.65 + i * 0.12, type: "spring", stiffness: 320, damping: 16 }}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>

        <StatGrid stats={heroStats} />
      </div>
    </header>
  );
}
