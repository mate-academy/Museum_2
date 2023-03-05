'use strict';

const form = document.querySelector('.follow__form');
const inputs = document.querySelectorAll('.follow__input');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  inputs.forEach(function(elem) {
    elem.value = '';
  });
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body-with--menu');
  } else {
    document.body.classList.remove('page__body-with--menu');
  }
});
