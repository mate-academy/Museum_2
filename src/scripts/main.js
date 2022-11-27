'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#sidebar') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.reset();
});

const changeLanguage = document.querySelectorAll('.change-language');

changeLanguage.forEach(change => {
  change.addEventListener('change', (event) => {
    if (event.target.value === 'en') {
      window.location.pathname = './en.html';
    } else {
      window.location.pathname = './';
    }
  });
});
