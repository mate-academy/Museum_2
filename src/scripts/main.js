'use strict';

const topBar = document.querySelector('.header__top');
const burger = topBar.querySelector('.header__top-button');
const menu = document.querySelector('.menu');
const close = menu.querySelector('.menu__top-button')

burger.addEventListener('click', (e) => {
  menu.classList.add('active')

})

close.addEventListener('click', (e) => {
  menu.classList.remove('active')

})
