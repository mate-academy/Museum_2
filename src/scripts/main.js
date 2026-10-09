'use strict';

const form = document.querySelector('#subscribe-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});
