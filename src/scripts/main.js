'use strict';

const iconMenu = document.querySelector('.icon-menu');
const openMenu = document.querySelector('.open-menu');
const infoBlock = document.querySelector('.header__info-block');
const header = document.querySelector('.header');
const language = document.querySelector('.language');
const languageArrow = document.querySelector('.language__arrow');
const languageMenu = document.querySelector('.language__flex-container');
const en = document.querySelector('.language__EN');
const pl = document.querySelector('.language__PL');
const ua = document.querySelector('.language__UA');

languageArrow.classList.remove('language__arrow--open');
languageMenu.classList.remove('language__flex-container--open');

iconMenu.addEventListener('click', function() {
  iconMenu.classList.toggle('icon-menu__active');
  openMenu.classList.toggle('open-menu--open');
  infoBlock.classList.toggle('header__info-block--close');
  header.classList.toggle('header--close');
  language.classList.toggle('header__language--open');
});

languageArrow.addEventListener('click', function() {
  languageArrow.classList.toggle('language__arrow--open');
  languageMenu.classList.toggle('language__flex-container--open');
});

en.addEventListener('click', function() {
  en.classList.add('language__item--en');
  ua.classList.remove('language__item--ua');
  pl.classList.remove('language__item--pl');
  languageArrow.classList.remove('language__arrow--open');
  languageMenu.classList.remove('language__flex-container--open');
});

pl.addEventListener('click', function() {
  pl.classList.add('language__item--pl');
  ua.classList.remove('language__item--ua');
  en.classList.remove('language__item--en');
  languageArrow.classList.remove('language__arrow--open');
  languageMenu.classList.remove('language__flex-container--open');
});

ua.addEventListener('click', function() {
  ua.classList.add('language__item--ua');
  pl.classList.remove('language__item--pl');
  en.classList.remove('language__item--en');
  languageArrow.classList.remove('language__arrow--open');
  languageMenu.classList.remove('language__flex-container--open');
});
