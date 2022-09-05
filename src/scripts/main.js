'use strict';

// Overflow: hidden for .header__nav
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#sidebar') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// Cleared form fields after submit
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.reset();
});
