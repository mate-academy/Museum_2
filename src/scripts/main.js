'use strict';

document.querySelector('.header__burger').addEventListener('click', () => {
  document.querySelector('.header__burger-icon').classList.toggle('active');
  document.querySelector('.header__top').classList.toggle('active');
  document.querySelector('.header__nav').classList.toggle('animate');
});
