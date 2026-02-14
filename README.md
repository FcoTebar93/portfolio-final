# Francisco — Portfolio

[![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com)

Portfolio personal como **Desarrollador de Software** — sitio estático rápido, accesible y bilingüe (ES/EN), desplegado en Vercel.

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

---

## 🚀 Cómo ejecutarlo en local

```bash
# Clonar el repositorio
git clone https://github.com/FcoTebar93/portfolio-final.git
cd portfolio

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
├── astro.config.mjs
└── package.json
```

---

## 🌐 Despliegue en Vercel

El proyecto está preparado para [Vercel](https://vercel.com). Vercel detecta Astro automáticamente.

1. Conecta este repositorio en [vercel.com](https://vercel.com).
2. Deja los valores por defecto (build: `npm run build`, output: `dist`).
3. Despliega.

Para despliegues desde la CLI:

```bash
npm i -g vercel
vercel
```

---

## 📄 Licencia

Proyecto personal. Si quieres reutilizar partes del código o la estructura, siéntete libre (atribución siempre apreciada).

---

**Francisco** — [LinkedIn](https://www.linkedin.com/in/francisco-jos%C3%A9-t%C3%A9bar-navarro-5a858a23a/) · [Portfolio en vivo](https://portfolio-final-one-iota.vercel.app/)