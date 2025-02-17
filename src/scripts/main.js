'use strict';

const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.header__menu-open');
const closeMenu = document.querySelector('.menu__menu-close');
const logo = document.querySelector('.menu__top-bar-logo');
const menuLinks = document.querySelectorAll('.menu__link');
const languageSelector = document.querySelectorAll('.top-bar__language');
const dropdownMenu = document.querySelector('.top-bar__dropdown-menu');
const input = document.querySelector('.main__subscribe-input');
const form = document.querySelector('.main__subscribe-form');
const html = document.documentElement;



const openMenuHandler = () => {
  menu.classList.add('menu--open');
  html.classList.add('no-scroll');
};

const closeMenuHandler = () => {
  menu.classList.remove('menu--open');
  html.classList.remove('no-scroll');
};

openMenu.addEventListener('click', openMenuHandler);
closeMenu.addEventListener('click', closeMenuHandler);
logo.addEventListener('click', closeMenuHandler);

menuLinks.forEach((link) => {
  link.addEventListener('click', closeMenuHandler);
});


languageSelector.forEach((lan) => {
  lan.addEventListener('click', (e) => {
    e.stopPropagation();
    lan.classList.toggle('top-bar__language--open');
  });
});

document.addEventListener('click', (event) => {
  languageSelector.forEach((lan) => {
    if (!lan.contains(event.target)) {
      lan.classList.remove('top-bar__language--open');
    }
  });
});


input.addEventListener('focus', function () {
  this.placeholder = '';
});

input.addEventListener('blur', function () {
  this.placeholder = 'e-mail';
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (input.value.trim() === '' || !input.value.includes('@')) {
    input.placeholder = 'Please enter your email';

    input.classList.add('main__subscribe-input--error');
    setTimeout(
      () => input.classList.remove('main__subscribe-input--error'),
      600,
    );

    return;
  }
});
