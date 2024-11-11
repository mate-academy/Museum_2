import translations from './translations.js';

export function translate(language) {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach((element) => {
    const key = element.getAttribute('data-translate');
    const translate = translations[language][key];

    if ('attr' in translate) {
      element.setAttribute('aria-label', translate.attr);
      element.setAttribute('title', translate.attr);
    }

    if ('text' in translate) {
      element.textContent = translate.text;
    }
  });
}
