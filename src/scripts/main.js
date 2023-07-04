'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const button = document.querySelector('.sing__form-button');

const input = document.querySelector('.sing__input');

button.addEventListener('click', e => {
  e.preventDefault();
  input.value = '';
});
