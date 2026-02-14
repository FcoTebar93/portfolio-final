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