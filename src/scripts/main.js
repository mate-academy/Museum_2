'use strict';

const form = document.querySelector('.subscribe__form');
const inputs = document.querySelectorAll('subscribe__email');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});
