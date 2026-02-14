# Francisco — Portfolio

<p align="center">
  <a href="README.es.md" style="display: inline-block; padding: 0.4em 1em; margin: 0 2px; background: #21262d; color: #8b949e; text-decoration: none; border-radius: 6px; border: 1px solid #30363d;">🇪🇸 Español</a>
  <a href="README.en.md" style="display: inline-block; padding: 0.4em 1em; margin: 0 2px; background: #238636; color: white; text-decoration: none; border-radius: 6px; font-weight: 600;">🇬🇧 English</a>
</p>

[![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com)

Personal portfolio as a **Software Developer** — fast, accessible, bilingual (ES/EN) static site, deployed on Vercel.

### Links

| Link | URL |
|------|-----|
| **Live portfolio** | [portfolio-final-one-iota.vercel.app](https://portfolio-final-one-iota.vercel.app/) |
| **LinkedIn** | [linkedin.com/in/francisco-josé-tébar-navarro](https://www.linkedin.com/in/francisco-jos%C3%A9-t%C3%A9bar-navarro-5a858a23a/) |
| **Email** | [fcotebar93@gmail.com](mailto:fcotebar93@gmail.com) |

---

## Features

- **Astro + Tailwind CSS** — performance and modern styling
- **i18n** — Spanish and English with `localStorage` persistence
- **Light/dark theme** — toggle with saved preference
- **Sections**: Hero, About, Experience, Skills, Contact
- **Responsive** — mobile and desktop friendly
- **SEO** — meta tags and semantic structure

---

## Stack

| Technology | Use |
|------------|-----|
| [Astro](https://astro.build) | Static framework |
| [Tailwind CSS](https://tailwindcss.com) | Styling |
| [Vercel](https://vercel.com) | Hosting and deployment |

### Why Astro

I chose Astro for this portfolio because:

- **Performance**: it generates static HTML by default (zero JS on the client when not needed), ideal for a presentation site that should load fast on any device.
- **Right tool for the job**: a portfolio is mostly static content; it doesn’t need a full SPA, so I avoid using a heavier framework for that.
- **DX and flexibility**: simple `.astro` components, native Tailwind integration, and the option to use React/Vue/Svelte only where needed (islands).
- **SEO and Core Web Vitals**: less JavaScript sent to the browser improves LCP and TTI, which helps both SEO and the perceived quality for anyone reviewing the project.

In short: **the right tool for the use case** (static, fast, maintainable site) instead of a heavier framework.

---

## Run locally

```bash
# Clone the repo
git clone https://github.com/FcoTebar93/portfolio-final.git
cd portfolio-final

# Install dependencies
npm install

# Dev server (http://localhost:4321)
npm run dev
```

### Available scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Production build in `./dist/` |
| `npm run preview` | Preview the build before deploying |
| `npm run lint` | Run ESLint (Astro + code) |
| `npm run check` | Typecheck with Astro (TypeScript + components) |
| `npm run validate` | **Lint + typecheck** (recommended before commit or deploy) |

**Pre-commit (Husky):** on each `git commit`, `npm run validate` runs automatically. If lint or typecheck fails, the commit is aborted. After `npm install`, the hook is registered via the `prepare` script.

---

## Project structure

```
/
├── public/           # Static assets (favicon, images)
├── src/
│   ├── components/   # ThemeToggle, LanguageToggle
│   ├── i18n/         # Translations (es.json, en.json)
│   ├── layouts/      # Layout.astro
│   ├── pages/        # index.astro
│   ├── sections/     # Hero, About, Experience, Skills, Contact
│   ├── styles/       # global.css
│   └── utils/        # i18n.ts
├── .husky/          # Git hooks (pre-commit → validate)
├── astro.config.mjs
└── package.json
```

---

## Deploy on Vercel

The project is set up for [Vercel](https://vercel.com). Vercel detects Astro automatically.

1. Connect this repo at [vercel.com](https://vercel.com).
2. **Build command** (optional): `npm run validate && npm run build` — so deploy fails if there are lint or type errors.
3. Output: `dist`. Deploy.

To deploy via CLI:

```bash
npm i -g vercel
vercel
```

---

## Experience (summary)

**Fullstack** profile with focus on backend, cloud, and automation. Summary of the roles shown on the [live portfolio](https://portfolio-final-one-iota.vercel.app/):

| Role | Company | Period | Highlights |
|------|---------|--------|------------|
| **Software Developer** | Aunoa · Valencia | Mar 2024 – Jan 2026 | Maintenance and extension of a large-scale communication platform (Angular, Node.js, Docker, K8s, GCP, Jenkins, SQL, Redis, RabbitMQ, ClickHouse, Vault, LLMs). **Led** the renewal of the bulk WhatsApp template creation and sending flow (UX + backend). **Contributed** to the VoIP contact center with voicebot (OpenAI Whisper) and agent transfer. |
| **Chatbot Developer** | Aunoa · Valencia | Nov 2023 – Mar 2024 | Design, build, and maintenance of chatbots with workflows, SOAP/REST APIs, NLP, and SQLite. **Led** prompt engineering and conversational AI tuning; performance reports and customer support. |
| **Backend Developer** | Mimacom · Valencia | Mar 2023 – May 2023 | End-to-end business logic for a recycling supply chain platform. **Aligned** frontend, backend, business, and support teams to deliver on time. |

Full detail and tech stack per role in the [Experience](https://portfolio-final-one-iota.vercel.app/#experience) section of the portfolio.

---

## License

Personal project. Feel free to reuse parts of the code or structure (attribution appreciated).
