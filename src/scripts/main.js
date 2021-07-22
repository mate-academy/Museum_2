'use strict';

const menu = document.querySelector('.header__manu-opener');
const navigation = document.querySelector('.navigation');

menu.addEventListener('click', () => {
  navigation.classList.toggle('navigation--active');
  menu.classList.toggle('header__manu-opener--active');
});

window.addEventListener('scroll', () => {
  navigation.classList.remove('navigation--active');
  menu.classList.remove('header__manu-opener--active');
});

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.subsribe__input');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});
