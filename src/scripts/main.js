'use strict';

const form = document.querySelector('.digest__box');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.reset();
});
