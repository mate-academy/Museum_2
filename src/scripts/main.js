'use strict';

const body = document.querySelector('.page__body');
const menuOpener = document.querySelector('.icon--menu');
const menu = document.querySelector('.menu');

menuOpener.addEventListener('click', function() {
  body.classList.add('page__body--with-menu');
});

menu.addEventListener('click', () => {
  body.classList.remove('page__body--with-menu');
});
