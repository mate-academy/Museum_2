'use strict';

const form = document.querySelector('.subscribe__email');
const inputs = document.querySelectorAll('.subscribe__email-form-field');

form.addEventListener('submit', (action) => {
  action.preventDefault();

  inputs.forEach((input) => {
    input.value = '';
  });
});
