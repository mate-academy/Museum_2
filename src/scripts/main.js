'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--menu-on');
  } else {
    document.body.classList.remove('page__body--menu-on');
  }
});

const form = document.getElementById('email-form');

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();
  form.reset();
});
