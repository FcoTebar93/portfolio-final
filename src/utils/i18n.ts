import en from '../i18n/en.json';
import es from '../i18n/es.json';

type Language = 'en' | 'es';
type Translations = typeof en;

const translations: Record<Language, Translations> = {
  en,
  es,
};

let currentLang: Language = 'en';

export function setLanguage(lang: Language) {
  currentLang = lang;
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    updatePageContent();
  }
}

export function getLanguage(): Language {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'en' || saved === 'es')) {
      currentLang = saved;
      return saved;
    }
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'es') {
      currentLang = 'es';
      return 'es';
    }
  }
  return currentLang;
}

export function t(key: string): string {
  const keys = key.split('.');
  let value: any = translations[currentLang];
  
  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) return key;
  }
  
  return typeof value === 'string' ? value : key;
}

if (typeof window !== 'undefined') {
  (window as any).t = t;
  (window as any).setLanguage = setLanguage;
  (window as any).getLanguage = getLanguage;
}

function updatePageContent() {
  if (typeof window === 'undefined') return;
  
  const lang = getLanguage();
  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[lang];
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) return key;
    }
    return typeof value === 'string' ? value : key;
  };

  const translationsMap: Record<string, string> = {
    'hero.portfolio': t('hero.portfolio'),
    'hero.subtitle': t('hero.subtitle'),
    'hero.description': t('hero.description'),
    'hero.viewWork': t('hero.viewWork'),
    'hero.contact': t('hero.contact'),
    'about.title': t('about.title'),
    'about.heading': t('about.heading'),
    'about.paragraph1': t('about.paragraph1'),
    'about.paragraph2': t('about.paragraph2'),
    'experience.title': t('experience.title'),
    'experience.roles.softwareDeveloper': t('experience.roles.softwareDeveloper'),
    'experience.roles.chatbotDeveloper': t('experience.roles.chatbotDeveloper'),
    'experience.roles.backendDeveloper': t('experience.roles.backendDeveloper'),
    'experience.locations.aunoa': t('experience.locations.aunoa'),
    'experience.locations.mimacom': t('experience.locations.mimacom'),
    'experience.descriptions.softwareDev1': t('experience.descriptions.softwareDev1'),
    'experience.descriptions.softwareDev2': t('experience.descriptions.softwareDev2'),
    'experience.descriptions.softwareDev3': t('experience.descriptions.softwareDev3'),
    'experience.descriptions.chatbotDev1': t('experience.descriptions.chatbotDev1'),
    'experience.descriptions.chatbotDev2': t('experience.descriptions.chatbotDev2'),
    'experience.descriptions.backendDev1': t('experience.descriptions.backendDev1'),
    'experience.descriptions.backendDev2': t('experience.descriptions.backendDev2'),
    'experience.achievements.softwareDev1': t('experience.achievements.softwareDev1'),
    'experience.achievements.softwareDev2': t('experience.achievements.softwareDev2'),
    'experience.achievements.softwareDev3': t('experience.achievements.softwareDev3'),
    'experience.achievements.chatbotDev1': t('experience.achievements.chatbotDev1'),
    'experience.achievements.chatbotDev2': t('experience.achievements.chatbotDev2'),
    'experience.achievements.backendDev1': t('experience.achievements.backendDev1'),
    'experience.achievements.backendDev2': t('experience.achievements.backendDev2'),
    'skills.title': t('skills.title'),
    'skills.filters.all': t('skills.filters.all'),
    'skills.filters.frontend': t('skills.filters.frontend'),
    'skills.filters.backend': t('skills.filters.backend'),
    'skills.filters.devops': t('skills.filters.devops'),
    'skills.filters.ai': t('skills.filters.ai'),
    'contact.title': t('contact.title'),
    'contact.heading': t('contact.heading'),
    'contact.email': t('contact.email'),
    'contact.social': t('contact.social'),
    'contact.form.name': t('contact.form.name'),
    'contact.form.email': t('contact.form.email'),
    'contact.form.subject': t('contact.form.subject'),
    'contact.form.message': t('contact.form.message'),
    'contact.form.send': t('contact.form.send'),
    'contact.form.namePlaceholder': t('contact.form.namePlaceholder'),
    'contact.form.emailPlaceholder': t('contact.form.emailPlaceholder'),
    'contact.form.subjectPlaceholder': t('contact.form.subjectPlaceholder'),
    'contact.form.messagePlaceholder': t('contact.form.messagePlaceholder'),
    'footer.copyright': t('footer.copyright'),
    'projects.title': t('projects.title'),
    'projects.subtitle': t('projects.subtitle'),
    'projects.items.eventix.name': t('projects.items.eventix.name'),
    'projects.items.eventix.role': t('projects.items.eventix.role'),
    'projects.items.eventix.short': t('projects.items.eventix.short'),
    'projects.items.agentic-code-reviewer.name': t('projects.items.agentic-code-reviewer.name'),
    'projects.items.agentic-code-reviewer.role': t('projects.items.agentic-code-reviewer.role'),
    'projects.items.agentic-code-reviewer.short': t('projects.items.agentic-code-reviewer.short'),
    'projects.items.ftn.name': t('projects.items.ftn.name'),
    'projects.items.ftn.role': t('projects.items.ftn.role'),
    'projects.items.ftn.short': t('projects.items.ftn.short'),
    'projects.ui.cardViewDetails': t('projects.ui.cardViewDetails'),
    'projects.ui.modalDetails': t('projects.ui.modalDetails'),
    'projects.ui.modalTechnologies': t('projects.ui.modalTechnologies'),
    'projects.ui.modalGithub': t('projects.ui.modalGithub'),
    'projects.ui.modalLive': t('projects.ui.modalLive'),
    'projects.ui.modalBack': t('projects.ui.modalBack'),
  };

  Object.entries(translationsMap).forEach(([key, value]) => {
    const elements = document.querySelectorAll(`[data-i18n="${key}"]`);
    elements.forEach((el) => {
      el.textContent = value;
    });
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key && (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement)) {
      el.placeholder = t(key);
    }
  });

  const typewriter = document.getElementById('typewriter');
  if (typewriter) {
    const roles = lang === 'es' 
      ? ["Desarrollador Fullstack", "CI/CD & DevOps", "Kubernetes & Docker", "Cloud & GCP", "Despliegue de LLM", "Automatización e Integraciones"]
      : ["Fullstack Developer", "CI/CD & DevOps", "Kubernetes & Docker", "Cloud & GCP", "LLM Deployment", "Automation & Integrations"];
    typewriter.setAttribute('data-roles', JSON.stringify(roles));
    if (!typewriter.textContent || typewriter.textContent.length < 5) {
      typewriter.textContent = roles[0];
    }
  }

  const projectCards = document.querySelectorAll<HTMLElement>('[data-project-id]');
  projectCards.forEach((card) => {
    const id = card.getAttribute('data-project-id');
    if (!id) return;

    card.setAttribute('data-name', t(`projects.items.${id}.name`));
    card.setAttribute('data-role', t(`projects.items.${id}.role`));
    card.setAttribute('data-short', t(`projects.items.${id}.short`));
    card.setAttribute('data-long', t(`projects.items.${id}.long`));
  });
}

if (typeof window !== 'undefined') {
  const lang = getLanguage();
  setLanguage(lang);
  (window as any).updatePageContent = updatePageContent;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => updatePageContent());
  } else {
    updatePageContent();
  }
}