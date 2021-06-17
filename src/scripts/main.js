'use strict';

const toggler = document.querySelector('.menu__toggler');
const mobileNavigation = document.querySelector('.header__nav');
const select = document.querySelector('.menu__select');
const arrow = document.querySelector('.email-form__button');
const email = document.querySelector('.email-form__email');

toggler.addEventListener('click', () => {
  mobileNavigation.classList.toggle('header__nav--active');
  toggler.classList.toggle('menu__toggler--active');
  select.classList.toggle('menu__select--active');
});

email.addEventListener('focus', () => {
  arrow.classList.toggle('email-form__button--active');
});
