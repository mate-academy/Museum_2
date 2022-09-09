'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.form__att');
const inputs = document.querySelectorAll('.form__email');

function handler(event) {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });

  window.scrollBy(-10000, -10000);
}

form.addEventListener('submit', handler);
