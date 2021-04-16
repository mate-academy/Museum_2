'use strict';

const toggler = document.querySelector('#toggler-nav');
const nav = document.querySelector('.nav');
const page = document.querySelector('.page');
const icon = document.querySelector('.header__menu-icon');

const menuToggler = () => {
  nav.classList.toggle('nav--active');
  page.classList.toggle('page--fixed');
  icon.classList.toggle('header__menu-icon--close');
};

toggler.addEventListener('click', menuToggler);
nav.addEventListener('click', menuToggler);
