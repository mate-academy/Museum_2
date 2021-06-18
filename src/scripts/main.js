'use strict';

const manu = document.querySelector('.header__manu-opener');
const navigation = document.querySelector('.nav');
const language = document.querySelector('.header__lang');

manu.addEventListener('click', () => {
  navigation.classList.toggle('nav--active');
  manu.classList.toggle('header__manu-opener--active');
  language.classList.toggle('header__lang--active');
});

window.addEventListener('scroll', () => {
  navigation.classList.remove('nav--active');
  manu.classList.remove('header__manu-opener--active');
  language.classList.remove('header__lang--active');
});
