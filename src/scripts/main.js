'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const langTopAction = document.querySelector('.top-action__lang');

  burgerBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--active');
    burgerBtn.classList.toggle('burger--active');
    langTopAction.classList.toggle('top-action__lang--active');
    document.body.classList.toggle('page__body--active');
  });
});
