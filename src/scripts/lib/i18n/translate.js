import { I18n } from 'i18n-js';
import en from './en';
import ua from './ua';

const translations = { en, ua };
const i18n = new I18n(translations);
i18n.locale = 'ua';
i18n.defaultLocale = 'ua';

const langButtons = document.querySelectorAll('[data-lang]');

console.log(langButtons);

if (langButtons.length) {
  langButtons.forEach((langButton) => {
    langButton.addEventListener('click', (e) => {
      langButton.textContent === 'UA'
        ? changeLanguage('ua')
        : changeLanguage('en');
    });
  });
} else {
  console.warn('Language buttons not found.');
}

function updateTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    el.textContent = i18n.t(key);
  });
}

function changeLanguage(lang) {
  i18n.locale = lang;
  updateTranslations();
}

updateTranslations();
