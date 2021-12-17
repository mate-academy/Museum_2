'use strict';

const form = document.getElementById('form');
const input = document.querySelector('.subscription__input');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  input.value = '';
});
