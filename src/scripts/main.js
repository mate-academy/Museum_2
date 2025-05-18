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

const langSwitcher = document.querySelector('.language-switcher');
const langElements = document.querySelectorAll('[data-lang]');
const langDropDown = document.querySelector('.language-switcher__dropdown-content')
let currentLang = 'ua';

langSwitcher.addEventListener('click', () => {
   currentLang = currentLang === 'ua' ? 'en' : 'ua';

   langElements.forEach(element => {
    if (element.dataset.lang === currentLang) {
      element.classList.remove('hidden');
    } else {
      element.classList.add('hidden');
    }
   })
})

const langSwitcherMenu = document.querySelector('.language-switcher--menu');

langSwitcherMenu.addEventListener('click', () => {
   currentLang = currentLang === 'ua' ? 'en' : 'ua';

   langElements.forEach(element => {
    if (element.dataset.lang === currentLang) {
      element.classList.remove('hidden');
    } else {
      element.classList.add('hidden');
    }
   })
})
