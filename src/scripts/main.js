'use strict';

const header = document.querySelector('.header');
const burgerTrigger = header.querySelector('.header__burger');
const menuLinks = header.querySelectorAll('.menu__link ');

function toggleBurgerMenu() {
  header.classList.toggle('header--active');
}

function hideBurgerMenu() {
  header.classList.remove('header--active');
}

burgerTrigger.addEventListener('click', toggleBurgerMenu, false);

menuLinks.forEach(link => {
  link.addEventListener('click', hideBurgerMenu, false);
});
