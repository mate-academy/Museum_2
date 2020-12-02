'use strict';

const burgerMenu = document.querySelector('.nav__burger-menu');
const navButton = document.querySelector('.nav__btn');

export const navToggler = navButton.addEventListener('click', () => {
  navButton.classList.toggle('active')
  burgerMenu.classList.toggle('show');
});
