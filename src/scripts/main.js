'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const headerIcon = document.querySelector('.header__icon');
  const menu = document.querySelector('.menu');
  const menuItems = document.querySelectorAll('.menu__item');

  headerIcon.addEventListener('click', function() {
    menu.classList.toggle('open');

    if (menu.classList.contains('open')) {
      document.body.style.overflow = 'hidden';
      menu.style.overflow = 'auto';
    } else {
      document.body.style.overflow = '';
      menu.style.overflow = '';
    }
  });

  menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      menu.classList.remove('open');
      document.body.style.overflow = '';
      menu.style.overflow = '';
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
