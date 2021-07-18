'use strict';

const form = document.querySelector('.subscribe__form');
const input = document.querySelector('.subscribe__input');

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  input.value = '';
});
