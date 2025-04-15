'use strict';

const root = document.documentElement;
const header = document.querySelector('.header');
const exhibitionTitle1 = document.querySelector('.exhibition__title__bloc--1');
const exhibitionTitle2 = document.querySelector('.exhibition__title__bloc--2');
const exhibitionDescriptions1 = document.querySelector('.exhibition__descriptions__bloc--1');
const exhibitionDescriptions2 = document.querySelector('.exhibition__descriptions__bloc--2');
const gridColumn = document.querySelector('.page__grid-measurer__column');
const initialTitHeight = 'initial';
const initialDescrHeight = 'initial';

const handleWindowResize = () => {
  exhibitionTitle1.style.height = initialTitHeight;
  exhibitionTitle2.style.height = initialTitHeight;
  exhibitionDescriptions1.style.height = initialDescrHeight;
  exhibitionDescriptions2.style.height = initialDescrHeight;

  const headerWidth = header.offsetWidth;
  const exhTit1Height = exhibitionTitle1.offsetHeight;
  const exhTit2Height = exhibitionTitle2.offsetHeight;
  const exhDescr1Height = exhibitionDescriptions1.offsetHeight;
  const exhDescr2Height = exhibitionDescriptions2.offsetHeight;
  const gridColumnWidth = gridColumn.offsetWidth;
  const columnGap = 30;

  if (headerWidth > 768 && headerWidth < 1280) {
    if (exhTit1Height > exhTit2Height) {
      exhibitionTitle2.style.height = exhTit1Height + 'px';
    }

    if (exhTit2Height > exhTit1Height) {
      exhibitionTitle1.style.height = exhTit2Height + 'px';
    }

    if (exhDescr1Height > exhDescr2Height) {
      exhibitionDescriptions2.style.height = exhDescr1Height + 'px';
    }

    if (exhDescr2Height > exhDescr1Height) {
      exhibitionDescriptions1.style.height = exhDescr2Height + 'px';
    }
  }

  if (headerWidth >= 1280) {
    exhibitionTitle1.style.height = initialTitHeight;
    exhibitionTitle2.style.height = initialTitHeight;
    exhibitionDescriptions1.style.height = initialDescrHeight;
    exhibitionDescriptions2.style.height = initialDescrHeight;

    const btnPrimaryWidth = gridColumnWidth * 3 + columnGap * 2 + 'px';

    root.style.setProperty('--btn-primary-width', btnPrimaryWidth);
  }
};

handleWindowResize();

window.addEventListener('resize', handleWindowResize);

// -------------- Translations ----------------
import uaTranslations from './lang/ua.js';
import enTranslations from './lang/en.js';
import deTranslations from './lang/de.js';
import frTranslations from './lang/fr.js';

const translations = {
  ua: uaTranslations,
  en: enTranslations,
  de: deTranslations,
  fr: frTranslations
};

const translatableElements = document.querySelectorAll('[data-key]');
const customSelect = document.querySelectorAll('.custom-select');
const selectedOption = document.querySelectorAll('.selected-option');
const currentLanguageSpan = document.querySelectorAll('.current-language');
const optionsList = document.querySelectorAll('.options');
const languageOptions = document.querySelectorAll('.options li');

function translatePage(lang) {
  const currentTranslations = translations[lang];

  translatableElements.forEach(element => {
      const key = element.dataset.key;

      if (currentTranslations && currentTranslations[key]) {
          element.innerHTML = currentTranslations[key];
      }
  });

  // Активуємо відповідну кнопку мови
  languageOptions.forEach(btn => {
      btn.classList.remove('active');

      if (btn.dataset.lang === lang) {
          btn.classList.add('active');
      }
  });
}

// Відкриття/закриття випадаючого списку при кліку на обрану опцію
selectedOption[0].addEventListener('click', () => {
    optionsList[0].classList.toggle('open');
    optionsList[1].classList.toggle('open');
});

selectedOption[1].addEventListener('click', () => {
    optionsList[0].classList.toggle('open');
    optionsList[1].classList.toggle('open');
});

// Вибір мови з випадаючого списку
languageOptions.forEach(option => {
    option.addEventListener('click', () => {
        const selectedLang = option.dataset.lang;
        currentLanguageSpan.forEach(el => el.textContent = option.textContent);
        optionsList[0].classList.remove('open');
        optionsList[1].classList.remove('open');

        // Викликайте вашу функцію для перекладу сторінки
        translatePage(selectedLang);

        // Збережіть обрану мову (за потреби)
        localStorage.setItem('currentLanguage', selectedLang);
    });
});



// Закриття випадаючого списку при кліку за його межами
document.addEventListener('click', (event) => {
    if (!customSelect[0].contains(event.target) && optionsList[0].classList.contains('open')) {
        optionsList[0].classList.remove('open');
    }

    if (!customSelect[1].contains(event.target) && optionsList[1].classList.contains('open')) {
        optionsList[1].classList.remove('open');
    }
});




// При завантаженні сторінки (за потреби, якщо ви зберігаєте обрану мову)
const storedLanguage = localStorage.getItem('currentLanguage');

if (storedLanguage) {
  const optionToSelect = Array.from(languageOptions).find(
      option => option.dataset.lang === storedLanguage
  );

  if (optionToSelect) {
      // currentLanguageSpan.textContent = optionToSelect.textContent;
      currentLanguageSpan.forEach(el => el.innerHTML = optionToSelect.textContent);
      translatePage(storedLanguage);
  }
}
