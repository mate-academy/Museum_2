'use strict';

const menu = document.querySelector('.menu');
const burgerMenu = document.querySelector('.header__burger-menu');
const body = document.getElementById('home');
const header = document.querySelector('.header');
const navLinkHeader = header.querySelectorAll('.nav__link');
const headerButton = header.querySelector('.button');
const form = document.querySelector('.subscribe__form');
const footer = document.querySelector('.footer');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('header__burger-menu--active');
  menu.classList.toggle('menu--active');
  headerButton.classList.toggle('button--menu-active');
  body.classList.toggle('block-scroll');
});

navLinkHeader.forEach((link) => {
  link.addEventListener('click', () => {
    burgerMenu.classList.toggle('header__burger-menu--active');
    menu.classList.toggle('menu--active');
    headerButton.classList.toggle('button--menu-active');
    body.classList.toggle('block-scroll');
  });
});

headerButton.addEventListener('click', () => {
  footer.scrollIntoView({ behavior: 'smooth' });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
