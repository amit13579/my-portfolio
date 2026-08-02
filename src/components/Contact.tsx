"use client";

import { motion } from "motion/react";
import { links } from "@/data/portfolio";
import { SectionHeader } from "./ui";

const fields = [
  { name: "name", label: "Full Name", type: "text" },
  { name: "email", label: "Email Address", type: "email" },
  { name: "subject", label: "Subject", type: "text" },
];

const infoRows = [
  { ico: "✉️", label: "Email", value: links.email, href: `mailto:${links.email}` },
  { ico: "📞", label: "Phone", value: links.phone, href: `tel:${links.phoneHref}` },
  { ico: "📍", label: "Location", value: links.location },
  { ico: "🔗", label: "LinkedIn", value: "linkedin.com/in/amit-kumar-gupta", href: links.linkedin },
  { ico: "🐙", label: "GitHub", value: "github.com/amit13579", href: links.github },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-cream-deep">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionHeader
          eyebrow="08 · Let's Connect"
          title="Let's Build Something"
          accent="Together"
          sub="Open to full-time roles, freelance projects and interesting conversations about full-stack & GenAI engineering."
        />

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 mt-2">
          <motion.form
            action={`https://formsubmit.co/${links.email}`}
            method="POST"
            className="rounded-2xl bg-white border border-ink/10 shadow-warm p-8"
            initial={{ opacity: 0, x: -50, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <input type="hidden" name="_subject" value="New message from portfolio website" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://amit13579.github.io/my-portfolio/?sent=1" />

            {fields.map((f) => (
              <div key={f.name} className="relative mb-6">
                <input
                  type={f.type}
                  name={f.name}
                  id={f.name}
                  required
                  placeholder=" "
                  className="peer w-full px-4 pt-4 pb-3 rounded-xl bg-paper border border-ink/10 text-sm outline-none focus:border-bronze transition-colors"
                />
                <label
                  htmlFor={f.name}
                  className="absolute left-4 top-3.5 text-sm text-ink-soft pointer-events-none transition-all peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-[0.7rem] peer-focus:text-bronze peer-focus:bg-white peer-focus:px-1.5 peer-focus:rounded peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1.5 peer-[:not(:placeholder-shown)]:rounded"
                >
                  {f.label}
                </label>
              </div>
            ))}

            <div className="relative mb-6">
              <textarea
                name="message"
                id="message"
                rows={6}
                required
                placeholder=" "
                className="peer w-full px-4 pt-4 pb-3 rounded-xl bg-paper border border-ink/10 text-sm outline-none focus:border-bronze transition-colors resize-y"
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-3.5 text-sm text-ink-soft pointer-events-none transition-all peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-[0.7rem] peer-focus:text-bronze peer-focus:bg-white peer-focus:px-1.5 peer-focus:rounded peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1.5 peer-[:not(:placeholder-shown)]:rounded"
              >
                Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-semibold bg-charcoal text-cream-on-dark hover:bg-charcoal-2 hover:-translate-y-0.5 transition-all shadow-lg"
            >
              Send Message ✦
            </button>
          </motion.form>

          <motion.aside
            className="rounded-2xl bg-gradient-to-br from-charcoal to-charcoal-2 text-cream-on-dark border border-ink/10 shadow-warm p-8 h-fit"
            initial={{ opacity: 0, x: 50, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-serif text-xl font-bold text-[#fbf7f0] mb-5">Contact Information</h3>
            {infoRows.map((r) => {
              const inner = (
                <>
                  <span className="shrink-0 grid place-items-center w-10 h-10 rounded-xl bg-gold-soft/10 border border-gold-soft/25 text-base">
                    {r.ico}
                  </span>
                  <span className="text-sm text-cream-on-dark/70">
                    <b className="block text-gold-soft text-[0.72rem] uppercase tracking-wider">{r.label}</b>
                    {r.value}
                  </span>
                </>
              );
              const cls =
                "flex gap-3.5 items-center px-3 py-3 rounded-xl mb-1 hover:translate-x-1.5 hover:bg-gold-soft/10 transition-all";
              return r.href ? (
                <a key={r.label} href={r.href} target={r.href.startsWith("http") ? "_blank" : undefined} rel="noopener" className={cls}>
                  {inner}
                </a>
              ) : (
                <div key={r.label} className={cls}>
                  {inner}
                </div>
              );
            })}
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
