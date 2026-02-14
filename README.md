# Francisco — Portfolio

<p align="center"><strong>Elige idioma / Choose language</strong></p>
<p align="center">
  <sub>Haz clic en la pestaña para desplegar el contenido / Click the tab to expand</sub>
</p>

[![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com)

---

<details open>
<summary><strong>🇪🇸 Español</strong></summary>

Portfolio personal como **Desarrollador de Software** — sitio estático rápido, accesible y bilingüe (ES/EN), desplegado en Vercel.

### Enlaces

| Enlace | URL |
|--------|-----|
| **Portfolio en vivo** | [portfolio-final-one-iota.vercel.app](https://portfolio-final-one-iota.vercel.app/) |
| **LinkedIn** | [linkedin.com/in/francisco-josé-tébar-navarro](https://www.linkedin.com/in/francisco-jos%C3%A9-t%C3%A9bar-navarro-5a858a23a/) |
| **Mail** | [fcotebar93@gmail.com](mailto:fcotebar93@gmail.com) |

---

## ✨ Características

- **Astro + Tailwind CSS** — rendimiento y estilos modernos
- **i18n** — español e inglés con persistencia en `localStorage`
- **Tema claro/oscuro** — toggle con preferencia guardada
- **Secciones**: Hero, Sobre mí, Experiencia, Habilidades, Contacto
- **Responsive** — adaptable a móvil y escritorio
- **SEO** — meta tags y estructura semántica

---

## 🛠 Stack

| Tecnología | Uso |
|------------|-----|
| [Astro](https://astro.build) | Framework estático |
| [Tailwind CSS](https://tailwindcss.com) | Estilos |
| [Vercel](https://vercel.com) | Hosting y despliegue |

### Por qué Astro

Elegí Astro para crear mi portafolio por las siguientes razones:

- **Rendimiento**: genera HTML estático por defecto (zero JS en el cliente si no lo necesitas), ideal para un sitio de presentación que debe cargar rápido en cualquier dispositivo.
- **Adecuado al problema**: un portfolio es contenido mayormente estático; no requiere un SPA completo, así que evito el uso de un framework para dicha tarea.
- **DX y flexibilidad**: componentes `.astro` sencillos, integración nativa con Tailwind y posibilidad de usar React/Vue/Svelte solo donde haga falta (islands).
- **SEO y Core Web Vitals**: menos JavaScript enviado al navegador mejora LCP y TTI, lo que ayuda tanto a SEO como a la percepción de calidad para quien revisa el proyecto.

En resumen: **herramienta adecuada al caso de uso** (sitio estático, rápido y mantenible) en lugar de usar un framework más pesado.

---

## 🚀 Cómo ejecutarlo en local

```bash
# Clonar el repositorio
git clone https://github.com/FcoTebar93/portfolio-final.git
cd portfolio-final

# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:4321)
npm run dev
```

### Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo en `localhost:4321` |
| `npm run build` | Build de producción en `./dist/` |
| `npm run preview` | Vista previa del build antes de desplegar |
| `npm run lint` | Ejecutar ESLint (Astro + código) |
| `npm run check` | Typecheck con Astro (TypeScript + componentes) |
| `npm run validate` | **Lint + typecheck** (recomendado antes de commit o deploy) |

**Pre-commit (Husky):** en cada `git commit` se ejecuta `npm run validate` automáticamente. Si lint o typecheck fallan, el commit se aborta. Tras `npm install`, el hook queda registrado gracias al script `prepare`.

---

## 📁 Estructura del proyecto

```
/
├── public/           # Assets estáticos (favicon, imágenes)
├── src/
│   ├── components/   # ThemeToggle, LanguageToggle
│   ├── i18n/         # Traducciones (es.json, en.json)
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

## 🌐 Despliegue en Vercel

El proyecto está preparado para [Vercel](https://vercel.com). Vercel detecta Astro automáticamente, la cual es otra razón para decidirnos por esta plataforma.

1. Conecta este repositorio en [vercel.com](https://vercel.com).
2. **Build command** recomendado: `npm run validate && npm run build` — así el deploy falla si hay errores de lint o tipos.
3. Output: `dist`. Despliega.

*Si prefieres no bloquear el deploy por validate, deja el build en `npm run build` y ejecuta `npm run validate` en local antes de hacer push.*

Para despliegues desde la CLI:

```bash
npm i -g vercel
vercel
```

---

## 👤 Experiencia (resumen)

Perfil **fullstack** con foco en backend, cloud y automatización. Resumen de los roles que aparecen en el [portfolio en vivo](https://portfolio-final-one-iota.vercel.app/):

| Rol | Empresa | Periodo | Logros destacados |
|-----|---------|---------|--------------------|
| **Desarrollador de software** | Aunoa · Valencia | Mar 2024 – Ene 2026 | Mantenimiento y extensión de una plataforma de comunicación a gran escala (Angular, Node.js, Docker, K8s, GCP, Jenkins, SQL, Redis, RabbitMQ, ClickHouse, Vault, LLMs). **Lideré** la renovación del flujo de creación y envío masivo de plantillas de WhatsApp (UX + backend). **Contribuí** al centro de contacto VoIP con voicebot (OpenAI Whisper) y transferencia a agentes. |
| **Desarrollador de Chatbots** | Aunoa · Valencia | Nov 2023 – Mar 2024 | Diseño, construcción y mantenimiento de chatbots con flujos de trabajo, APIs SOAP/REST, NLP y SQLite. **Lideré** la ingeniería de prompts y el ajuste de IA conversacional; informes de rendimiento y soporte al cliente. |
| **Desarrollador Backend** | Mimacom · Valencia | Mar 2023 – May 2023 | Lógica de negocio de extremo a extremo para una plataforma de cadena de suministro de reciclaje. **Alineación** de equipos frontend, backend, negocio y soporte para entregar el producto a tiempo. |

*Detalle completo y tech stack por rol en la sección [Experiencia](https://portfolio-final-one-iota.vercel.app/#experience) del portfolio.*

---

## 📄 Licencia

Proyecto personal. Si quieres reutilizar partes del código o la estructura, siéntete libre (atribución siempre apreciada).

</details>

---

<details>
<summary><strong>🇬🇧 English</strong></summary>

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
- **Right tool for the job**: a portfolio is mostly static content; it doesn't need a full SPA, so I avoid using a heavier framework for that.
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

</details>
