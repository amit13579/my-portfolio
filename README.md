# Amit Kumar Gupta — Portfolio

Personal portfolio website of **Amit Kumar Gupta** — Full Stack Developer (Python) · Angular · Django REST Framework · FastAPI · GenAI (RAG, LangChain, AI Agents).

**Live site:** https://amit13579.github.io/my-portfolio/

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router, static export) + React 19 + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/) — ivory & charcoal editorial theme
- [Motion](https://motion.dev/) (Framer Motion) — scroll-reveal animations, counters, spring transitions
- Contact form powered by [FormSubmit](https://formsubmit.co/)
- Hosted free on GitHub Pages (served from `/docs`)

## Development

```bash
npm install
npm run dev      # local dev server at http://localhost:3000
```

## Deploy

```bash
npm run build    # static export into out/
rm -rf docs && cp -r out docs && touch docs/.nojekyll
git add -A && git commit -m "update site" && git push
```

GitHub Pages serves the `docs/` folder on the `main` branch.

## Structure

```
src/app/          # layout (fonts, metadata) + page + global theme
src/components/   # Navbar, Hero, About, Experience, Education,
                  # Projects, Skills, Gallery (Certs + Achievements),
                  # Contact, Footer, shared UI (Reveal, CountUp)
src/data/         # all portfolio content in one typed data file
public/assets/    # profile photo, certificates, achievements, resume
docs/             # built static site served by GitHub Pages
```
