import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import ja from './ja.json';

// Detect user preference (simple)
const saved = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
const browserLang = typeof navigator !== 'undefined' ? navigator.language : 'en';
const initial = (saved || (browserLang.startsWith('ja') ? 'ja' : 'en')) as 'en' | 'ja';

i18n
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, ja: { translation: ja } },
    lng: initial,
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export const switchLanguage = (lng: 'en' | 'ja') => {
  i18n.changeLanguage(lng);
  if (typeof window !== 'undefined') localStorage.setItem('lang', lng);
  if (typeof document !== 'undefined') document.documentElement.lang = lng;
};

export default i18n;
