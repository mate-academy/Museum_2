'use strict';

document.addEventListener('DOMContentLoaded', function() {
  let headerIcon = document.querySelector('.header__icon');
  let menu = document.querySelector('.menu');
  let menuItems = document.querySelectorAll('.menu__item');

  headerIcon.addEventListener('click', function() {
    menu.classList.toggle('open');
  });

  menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      menu.classList.remove('open');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const headerIcon = document.querySelector('.header__icon');

  headerIcon.addEventListener('click', function() {
    headerIcon.classList.toggle('close');
  });
});

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
