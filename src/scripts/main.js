'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');

    const element = document.querySelector('.button__secondary');

    element.classList.add('button__secondary--hidden');

    document.onkeydown = function(key) {
      if (key.which === 9) {
        return false;
      }
    };
  } else {
    document.body.classList.remove('page__body--with-menu');

    const element = document.querySelector('.button__secondary');

    element.classList.remove('button__secondary--hidden');

    document.onkeydown = function(key) {
      if (key.which === 9) {
        return true;
      }
    };
  }
});

const form = document.querySelector('.subscribe__form');
const input = document.querySelector('.subscribe__field');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  input.value = '';
});
