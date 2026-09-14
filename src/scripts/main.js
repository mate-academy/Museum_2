import {
  getInitialLocale,
  fetchTranslations,
  updateDOM,
  STORAGE_KEY,
} from './i18n.js';

import { checkMuseumStatus } from './museum-status.js';
import { initCurrentYear } from './utils/_year.js';
import { initLangSelectDropdown } from './components/_lang-select.js';
import { initMobileMenu } from './components/_menu.js';

document.addEventListener('DOMContentLoaded', async () => {
  let currentLocale = getInitialLocale();
  let currentTranslations = null;

  const langSelectSummaries = document.querySelectorAll(
    '.lang-select__summary',
  );

  const infoScheduleToday = document.getElementById('info-schedule-today');

  // Update language selection interface (UA/EN)
  const updateLangSelectUI = (locale) => {
    langSelectSummaries.forEach(
      (select) => (select.textContent = locale.toUpperCase()),
    );
  };

  const updateMuseumStatus = (translations) => {
    if (!infoScheduleToday || !translations) {
      return;
    }

    const status = checkMuseumStatus();

    if (status.isOpen && status.schedule) {
      infoScheduleToday.textContent = status.schedule;
    } else {
      infoScheduleToday.textContent = translations.status.closed.toUpperCase();
    }
  };

  const changeLanguage = async (locale) => {
    const translations = await fetchTranslations(locale);

    if (!translations) {
      return;
    }

    currentLocale = locale;
    currentTranslations = translations;

    document.documentElement.lang = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);

    updateDOM(translations);
    updateLangSelectUI(locale);
    updateMuseumStatus(translations);
  };

  // --- Initialize base UI components and utilities ---
  initCurrentYear();
  initLangSelectDropdown();
  initMobileMenu();

  // --- Initialize i18n ---
  await changeLanguage(currentLocale);

  // Attach language change events to links (.lang-select__option)
  document.querySelectorAll('.lang-select__option').forEach((option) => {
    option.addEventListener('click', async (event) => {
      event.preventDefault();

      const locale = event.currentTarget.dataset.lang;

      if (locale && locale !== currentLocale) {
        await changeLanguage(locale);
      }
    });
  });

  // Update museum status every minute (to check if it has closed)
  setInterval(() => updateMuseumStatus(currentTranslations), 60000);
});
