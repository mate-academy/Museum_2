'use strict';

const body = document.querySelector('.page__body');
const open = document.querySelector('.icon--menu');
const close = document.querySelector('.icon--close');
const menu = document.querySelector('.menu');

open.addEventListener('click', () => {
  body.classList.add('no-scroll');
})

close.addEventListener('click', () => {
  body.classList.remove('no-scroll');
})

menu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    body.classList.remove('no-scroll');
  }
})

const langSwitcher = document.querySelectorAll('.language-switcher');
const langElements = document.querySelectorAll('[data-lang]');
let currentLang = 'ua';

langSwitcher.forEach(switcher => {
  const langDropDown = switcher.querySelector('.language-switcher__dropdown-content');
  const langOptions = document.querySelectorAll('.language-switcher__lang-options');

  switcher.addEventListener('click', () => {
    langDropDown.classList.toggle('hidden');
  })

  langOptions.forEach(option => {
    option.addEventListener('click', (event) => {
      event.stopPropagation();
      currentLang = option.dataset.option;
      langElements.forEach(element => {
        if (element.dataset.lang === currentLang) {
          element.classList.remove('hidden');
        } else {
          element.classList.add('hidden');
        }
      });
      langDropDown.classList.add('hidden');
    });
  });
});
