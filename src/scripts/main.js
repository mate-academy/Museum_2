'use strict';

const dropdownHeader = document.querySelector('header .dropdown');
const triggerHeader = dropdownHeader.querySelector('.dropdown__trigger');
const contentHeader = dropdownHeader.querySelector('.dropdown__items');

triggerHeader.addEventListener('click', () => {
  if (dropdownHeader.classList.contains('dropdown--active')) {
    contentHeader.style.maxHeight = '30';
    dropdownHeader.classList.remove('dropdown--active');
  } else {
    contentHeader.style.maxHeight = `60`;
    dropdownHeader.classList.add('dropdown--active');
  }
});

const dropdownMenu = document.querySelector('aside .dropdown');
const triggerMenu = dropdownMenu.querySelector('.dropdown__trigger');
const contentMenu = dropdownMenu.querySelector('.dropdown__items');

triggerMenu.addEventListener('click', () => {
  if (dropdownMenu.classList.contains('dropdown--active')) {
    contentMenu.style.maxHeight = '30';
    dropdownMenu.classList.remove('dropdown--active');
  } else {
    contentMenu.style.maxHeight = `60`;
    dropdownMenu.classList.add('dropdown--active');
  }
});

const form = document.querySelector('.subscribe__form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
