'use strict';
const body = document.querySelector('body');
const burger = document.querySelector('.icon--burger');
const close = document.querySelector('.icon--close');
const scrollBtn = document.querySelector('#top');

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const menuOpen = () => {
  body.classList.toggle('page_body--menu-open');

  scrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.left = '0';
  document.body.style.right = '0';
  document.body.style.width = '100%';
};
const menuClose = () => {
  body.classList.remove('page_body--menu-open');
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.right = '';
  document.body.style.width = '';
};

burger.addEventListener('click', menuOpen);
close.addEventListener('click', menuClose);
scrollBtn.addEventListener('click', scrollTop);
