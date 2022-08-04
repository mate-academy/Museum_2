'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const email = document.getElementById('mail');

email.addEventListener('input', function(event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('I am expecting an e-mail address!');
    email.reportValidity();
  } else {
    email.setCustomValidity('');
  }
});
