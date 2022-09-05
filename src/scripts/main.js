'use strict';

const elPin = document.querySelector('.icon--language-pin');
const elLang = document.querySelector('.icon--language');

const elPlinMenu = document.querySelector('.icon--language-pin-menu-phone');
const elLngMenu = document.querySelector('.icon--language-menu-phone');

elPin.addEventListener('click', function() {
  elLang.textContent = elLang.textContent === 'UA' ? 'ENG' : 'UA';
});

elPlinMenu.addEventListener('click', function() {
  elLngMenu.textContent = elLngMenu.textContent === 'UA' ? 'ENG' : 'UA';
});
