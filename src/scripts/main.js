'use strict';

const cross = document.querySelector('.nav__icon--cross');
const menuHide = document.querySelector('.menu__container');
const menuOpener = document.querySelector('.nav__icon--burger');
const link = document.querySelectorAll('.menu__link');
const home = document.querySelector('.namu__page');
const logo = document.querySelector('.menu__logo');

cross.addEventListener('click', function(e) {
  menuHide.classList.remove('menu__container--open');
  home.style.cssText = 'overflow-y: scroll';
});

logo.addEventListener('click', function(e) {
  menuHide.classList.remove('menu__container--open');
  home.style.cssText = 'overflow-y: scroll';
});

menuOpener.addEventListener('click', function(e) {
  menuHide.classList.add('menu__container--open');
  home.style.cssText = 'overflow-y: hidden';
});

link.forEach(e => e.addEventListener('click', function() {
  menuHide.classList.remove('menu__container--open');
  home.style.cssText = 'overflow-y: scroll';
}));

document.querySelector('.button--submit').addEventListener('click',
  function(event) {
    event.preventDefault();
  }, true);
