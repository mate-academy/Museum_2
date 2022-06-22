'use strict';

const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.nav');
const language = document.querySelector('.header__language');

burger.addEventListener('click', el => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
  language.classList.toggle('active');
});
