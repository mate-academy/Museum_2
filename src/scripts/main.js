'use strict';

const form = document.querySelector('.digest__form');
const input = document.querySelector('.digest__email');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  input.value = '';
});
