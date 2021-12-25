'use strict';

const toggler = document.querySelector('#toggler-nav');
const nav = document.querySelector('.nav');
const page = document.querySelector('.page');
const icon = document.querySelector('.header__menu-icon');

const menuToggler = () => {
  nav.classList.toggle('nav--active');
  page.classList.toggle('page--fixed');
  icon.classList.toggle('header__menu-icon--close');
};

toggler.addEventListener('click', menuToggler);
nav.addEventListener('click', menuToggler);

const btn1 = document.querySelector('#news-btn--1');
const btn2 = document.querySelector('#news-btn--2');
const btn3 = document.querySelector('#news-btn--3');

btn1.addEventListener('click', () => {
  document.getElementById('news__block-scroll').className
  = 'news__block-scroll news__block-scroll--1';

  document.getElementById('news-btn--1').className
  = 'news__block-toggler-btn--active';

  document.getElementById('news-btn--2').className
  = 'news__block-toggler-btn';

  document.getElementById('news-btn--3').className
  = 'news__block-toggler-btn';
});

btn2.addEventListener('click', () => {
  document.getElementById('news__block-scroll').className
  = 'news__block-scroll news__block-scroll--2';

  document.getElementById('news-btn--1').className
  = 'news__block-toggler-btn';

  document.getElementById('news-btn--2').className
  = 'news__block-toggler-btn--active';

  document.getElementById('news-btn--3').className
  = 'news__block-toggler-btn';
});

btn3.addEventListener('click', () => {
  document.getElementById('news__block-scroll').className
  = 'news__block-scroll news__block-scroll--3';

  document.getElementById('news-btn--1').className
  = 'news__block-toggler-btn';

  document.getElementById('news-btn--2').className
  = 'news__block-toggler-btn';

  document.getElementById('news-btn--3').className
  = 'news__block-toggler-btn--active';
});
