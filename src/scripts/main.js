'use strict';

const subscribeForm = document.querySelector('.form');

subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  subscribeForm.reset();
});
