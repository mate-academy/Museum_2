'use strict';

const form = document.querySelector('.follow__form');
const inputs = document.querySelectorAll('.follow__form-input');
const textarea = document.querySelector('.contact-us__form-text');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }

  textarea.value = '';
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
