'use strict';

const form = document.getElementById('form');
const input = document.querySelector('.digest__form-field');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  input.value = '';
});
