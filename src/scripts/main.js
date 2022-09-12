'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.subscribe__form');
const inputs = document.querySelectorAll('.subscribe__field');

function handler(event) {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
}

form.addEventListener('submit', handler);
