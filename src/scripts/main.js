'use strict';

const page = document.querySelector('.page');
const menuIcon = document.querySelector('#menuIcon');
const menu = document.querySelector('#menu');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('hamburger--active');
  menu.classList.toggle('page__menu--show');
  page.classList.toggle('page--with-menu');
});

const buyButtons = document.querySelectorAll('.btn');
const alertBox = document.querySelector('#alert');
const alertCloseBtn = document.querySelector('.alert__close-btn');

buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    alertBox.classList.add('page__alert--show');
  });
});

alertCloseBtn.addEventListener('click', () => {
  alertBox.classList.remove('page__alert--show');
});
