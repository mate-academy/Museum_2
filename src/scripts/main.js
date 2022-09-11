'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page_body-with-menu');
  } else {
    document.body.classList.remove('page_body-with-menu');
  }
});

// const form = document.getElementById('form');

// form.addEventListener('click', event => {
//   event.preventDefault();
//   document.querySelector('.subscribe_card_form_input').value = '';
//   event.target.reset();
// });

const form = document.querySelector('#form');

form.addEventListener('submit', event => {
  event.preventDefault();
  event.target.reset();
});
