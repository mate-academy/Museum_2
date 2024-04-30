'use strict';

const asideLink = document.querySelector('a[href="#aside"]');
const asideCloseBtn = document.querySelector('.aside__cover--top--cover--close');
const body = document.body;

asideLink.addEventListener('click', () => {
  body.classList.add('no-scroll');
});

asideCloseBtn.addEventListener('click', () => {
  body.classList.remove('no-scroll');
});
