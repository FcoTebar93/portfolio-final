# Francisco — Portfolio

**Idioma / Language:** 🇪🇸 [Español](README.md) · 🇬🇧 [English](README.en.md)

[![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com)

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