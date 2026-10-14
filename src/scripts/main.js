'use strict';

const form = document.querySelector('#form__subscribe');
const input = document.querySelector('.subscribe__input');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  input.value = '';
});
