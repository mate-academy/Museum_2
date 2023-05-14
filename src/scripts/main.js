'use strict';

const menu = document.querySelector('.menu');
const menuOpener = document.querySelector('.header__menu-opener');
const menuCross = document.querySelector('.menu__cross');
const menuLogo = document.querySelector('.menu__logo');
const menuLinks = document.querySelectorAll('.menu__link');
const menuButton = document.querySelector('.menu__button');

const openMenu = () => menu.classList.add('menu--open');
const closeMenu = () => menu.classList.remove('menu--open');

menuOpener.addEventListener('click', openMenu);
menuCross.addEventListener('click', closeMenu);
menuLogo.addEventListener('click', closeMenu);
menuButton.addEventListener('click', closeMenu);

menuLinks.forEach(item => item.addEventListener('click', closeMenu));
