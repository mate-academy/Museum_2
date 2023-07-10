'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(el => {
  const trigger = el.querySelector('.dropdown__trigger');

  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    el.classList.toggle('dropdown--active');
  });
});

function submitForm(event) {
  event.preventDefault();
  document.querySelector('#form').reset();
  window.location.hash = '#home';
}

document.querySelector('#form').addEventListener('submit', submitForm);
