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

const button = document.querySelector('.sign-up__button');
const form = document.querySelector('.sign-up__form');

form.addEventListener('change', () => {
  button.classList.add('sigh-up__button--email');
});

const list = document.querySelector('.slide__list');
const first = document.querySelector('.button--1');
const second = document.querySelector('.button--2');
const third = document.querySelector('.button--3');

first.addEventListener('click', () => {
  list.style.transform = `translate(0%)`;
});

second.addEventListener('click', () => {
  list.style.transform = `translate(-100%)`;
});

third.addEventListener('click', () => {
  list.style.transform = `translate(-200%)`;
});
