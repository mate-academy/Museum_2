export const STORAGE_KEY = 'museum-language';

const DEFAULT_LOCALE = 'uk';
const SUPPORTED_LOCALES = Object.freeze(['uk', 'en']);

export const getInitialLocale = () => {
  const savedLocale = window.localStorage.getItem(STORAGE_KEY);

  if (savedLocale && SUPPORTED_LOCALES.includes(savedLocale)) {
    return savedLocale;
  }

  const browserLocale = navigator.language.slice(0, 2);

  if (SUPPORTED_LOCALES.includes(browserLocale)) {
    return browserLocale;
  }

  return DEFAULT_LOCALE;
};

export const fetchTranslations = async (locale) => {
  try {
    const response = await fetch(`locales/${locale}.json`);

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch {
    return null;
  }
};

const getValueByPath = (obj, path) => {
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
};

export const updateDOM = (translations) => {
  if (!translations) {
    return;
  }

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const path = element.getAttribute('data-i18n');
    const text = getValueByPath(translations, path);

    if (text) {
      element.textContent = text;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const path = element.getAttribute('data-i18n-placeholder');
    const placeholder = getValueByPath(translations, path);

    if (placeholder) {
      element.setAttribute('placeholder', placeholder);
    }
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    const path = element.getAttribute('data-i18n-alt');
    const altText = getValueByPath(translations, path);

    if (altText) {
      element.setAttribute('alt', altText);
    }
  });
};
