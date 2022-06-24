'use strict';

const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.nav');
const language = document.querySelector('.header__language');

burger.addEventListener('click', el => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
  language.classList.toggle('active');
  document.body.classList.toggle('page__body--with-menu');
});

document.querySelectorAll('.nav__link').forEach(n => {
  n.addEventListener('click', () => {
    nav.classList.remove('active');
    document.body.classList.remove('page__body--with-menu');
    burger.classList.remove('active');
    language.classList.remove('active');
  });
});

document.querySelectorAll('.nav__btn').forEach(n => {
  n.addEventListener('click', () => {
    nav.classList.remove('active');
    document.body.classList.remove('page__body--with-menu');
    burger.classList.remove('active');
    language.classList.remove('active');
  });
});

document.querySelectorAll('.header__logo-link').forEach(n => {
  n.addEventListener('click', () => {
    nav.classList.remove('active');
    document.body.classList.remove('page__body--with-menu');
    burger.classList.remove('active');
    language.classList.remove('active');
  });
});

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();

  window.location.href = '#home';
});
