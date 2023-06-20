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

const dropdown = document.querySelector('.navigation__block_dropdown');
const trigger = document.querySelector('.navigation__block_dropdown-toggle');

trigger.addEventListener('click', (event) => {
  event.preventDefault();

  dropdown.classList.toggle('navigation__block_dropdown--active');
});

const dropdownMenu
  = document.querySelector('.navigation__block_dropdown--menu');
const triggerMenu
  = document.querySelector('.navigation__block_dropdown-toggle--menu');

triggerMenu.addEventListener('click', (event) => {
  event.preventDefault();

  dropdownMenu.classList.toggle('navigation__block_dropdown--active');
});
