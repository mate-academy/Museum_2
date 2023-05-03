'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--menu');
  } else {
    document.body.classList.remove('page__body--menu');
  }
});

const form = document.querySelector('.form');

form.addEventListener('submit', submitButtonClick,);

function submitButtonClick(event) {
  event.preventDefault();
  form.reset();
}
