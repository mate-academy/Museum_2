'use strict';

const topBar = document.querySelector('.header__top');
const menuBurger = topBar.querySelector('.header__top-button');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.navigation__item')
const menuClose = menu.querySelector('.top-bar__button')
const body = document.querySelector('body');

const from = document.querySelector('.digest__form')
const popup = document.querySelector('.popup');
const input = from.querySelector('.digest__input')
const digestError = from.querySelector('.digest__error');

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

function subscribe(event) {
  event.preventDefault();
  if (!input.value) {
    digestError.style.opacity = 1;
    const timeout = setTimeout(() => {
      digestError.style.opacity = 0;
      clearTimeout(timeout);
    }, 2000);
    return
  }
  input.value = '';
  popup.classList.add('popup-active');
  const timeout = setTimeout(() => {
    popup.classList.remove('popup-active');
    clearTimeout(timeout);
  }, 2000);
}

from.addEventListener('submit', subscribe);
menuBurger.addEventListener('click', activeMenu)
menuClose.addEventListener('click', closeMenu)
