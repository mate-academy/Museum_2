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

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.form-js');
const inputs = document.querySelectorAll('.js-form__input');

function handler(event) {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
}

form.addEventListener('submit', handler);
