'use strict';

const topBar = document.querySelector('.header__top');
const menuBurger = topBar.querySelector('.header__top-button');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.navigation__item')
const menuClose = menu.querySelector('.top-bar__button')
const body = document.querySelector('body');
const popup = document.querySelector('.popup');

function activeMenu() {
  menu.classList.add('active');
  body.style.overflowY = 'hidden';

  menuLinks.forEach((item) => {

    item.addEventListener('click', closeMenu);
  });
}

function closeMenu() {
  menu.classList.remove('active');
  body.style.overflowY = 'auto';

}

menuBurger.addEventListener('click', activeMenu)
menuClose.addEventListener('click', closeMenu)
