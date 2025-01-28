import { I18n } from 'i18n-js';
import en from './en';
import ua from './ua';

const translations = { en, ua };
const i18n = new I18n(translations);
i18n.locale = 'ua';
i18n.defaultLocale = 'ua';

const langButtons = document.querySelectorAll('[data-lang]');

function showLang(lang) {
  langButtons.forEach((item) => {
    item.classList.add('hide');

    if (item.getAttribute('data-lang') !== lang) {
      item.classList.remove('hide');
    }
  });
}

if (langButtons.length) {
  langButtons.forEach((langButton) => {
    langButton.addEventListener('click', (e) => {
      const target = e.target.getAttribute('data-lang');

      if (target === i18n.locale) {
        return;
      }
      switch (target) {
        case 'ua':
          changeLanguage('ua');
          showLang(target);
          return;
        case 'en':
          changeLanguage('en');
          showLang(target);
          return;
        default:
          return;
      }
    });
  });
} else {
  console.warn('Language buttons not found.');
}

function updateTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    el.innerHTML = i18n.t(key);
  });
}

function changeLanguage(lang) {
  i18n.locale = lang;
  updateTranslations();
}

updateTranslations();
showLang(i18n.locale)
