'use strict';

const form = document.querySelector('.form');
const input = document.querySelector('.form__email');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  input.value = '';
});
