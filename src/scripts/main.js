'use strict';

const menu = document.querySelector('.header__menu-toggle');

const navigation = document.querySelector('.page__nav');

const toggler = document.querySelector('#toggler');

toggler.addEventListener('click', () => {
  menu.classList.toggle('header__menu-toggle--active');
  navigation.classList.toggle('page__nav--active');
});
