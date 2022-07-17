'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const formClass = document.querySelector('.form-class');

function submitForm(event) {
  event.preventDefault();
  formClass.reset();
}

formClass.addEventListener('submit', submitForm);
