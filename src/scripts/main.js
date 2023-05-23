'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const button = document.querySelector('.submit-btn');
const form = document.querySelector('.page__form');

button.addEventListener('click', function(e) {
  e.preventDefault();

  const result = form.reportValidity();

  if (result === true) {
    form.reset();
  }
}, false);
