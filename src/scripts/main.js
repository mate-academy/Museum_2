'use strict';

const language = document.querySelector('.top-bar__language');
const languageList = document.querySelector('.top-bar__language-list');

language.addEventListener('click', () => {
  languageList.classList.toggle('active');
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.top-bar__language')) {
    languageList.classList.remove('active');
  }
});
