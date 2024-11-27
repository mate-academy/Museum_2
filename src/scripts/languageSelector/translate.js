'use strict';
import translations from './translations.js';

export function translate(language) {
  const elements = document.querySelectorAll('[data-translate]');

  elements.forEach((element) => {
    const key = element.getAttribute('data-translate');
    const currentTranslation = translations[language][key];

    // console.log(currentTranslation);

    if ('attr' in currentTranslation) {
      element.setAttribute('aria-label', currentTranslation.attr);
      element.setAttribute('title', currentTranslation.attr);
    }

    if ('text' in currentTranslation) {
      element.innerHTML = currentTranslation.text;
    }
  });
}
