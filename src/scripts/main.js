'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const langTopAction = document.querySelector('.top-action__lang');

  const navLinks = document.querySelectorAll('.nav__link');

  burgerBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--active');
    burgerBtn.classList.toggle('burger--active');
    langTopAction.classList.toggle('top-action__lang--active');
    document.body.classList.toggle('page__body--active');
  });

  navLinks.forEach(item => {
    item.addEventListener('click', () => {
      document.body.classList.remove('page__body--active');
      menu.classList.remove('menu--active');
      burgerBtn.classList.remove('burger--active');
    });
  });
});
