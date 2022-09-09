'use strict';

// disable scroll when menu is open
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// clear input fields in form when butoon was pressed,
// in this case, page is not updating
const form = document.querySelector('.subscribe__form');
const input = document.querySelector('.subscribe__email');

function handler(event) {
  event.preventDefault();

  input.value = '';
}

form.addEventListener('submit', handler);
