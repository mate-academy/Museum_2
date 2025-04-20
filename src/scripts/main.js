'use strict';

const form = document.getElementById('form');
const input = document.getElementById('form_input');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  input.value = '';
  input.classList.add("subscribe__input--submitted");

  window.scrollTo({ top: 0, behavior: 'smooth' });
});
