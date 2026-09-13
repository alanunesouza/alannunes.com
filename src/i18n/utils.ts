import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizedPath(pathname: string, targetLang: Lang): string {
  // Remove /en se existir no início do path
  const normalizedPath = pathname.replace(/^\/en(\/|$)/, '/');
  if (targetLang === defaultLang) {
    return normalizedPath.startsWith('/') ? normalizedPath : `/${normalizedPath}`;
  }
  const clean = normalizedPath.startsWith('/') ? normalizedPath : `/${normalizedPath}`;
  return clean === '/' ? '/en' : `/en${clean}`;
}
