'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('subscribe-to-the-digest__form');

form.addEventListener('submit', function handleSubmin(event) {
  event.preventDefault();

  form.reset();
});

const btnClose = document.getElementById('btn-ok');

const message = document.getElementById('message-block');
// const allButton = document.getElementById('button');

btnClose.addEventListener('click', function() {
  message.style.display = 'none';
});

// allButton.addEventListener('click', function() {
//   message.style.opacity = '1';
// })
