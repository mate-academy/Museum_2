'use strict';

const frm = document.getElementById('submitForm');

frm.addEventListener('submit', (event) => {
  event.preventDefault();
  frm.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
