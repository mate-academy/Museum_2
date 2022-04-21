'use strict';

const header = document.querySelector('.header');
const burgerTrigger = header.querySelector('.header__burger');

function toggleBurgerMenu() {
  header.classList.toggle('header--active');
}

burgerTrigger.addEventListener('click', toggleBurgerMenu, true);
