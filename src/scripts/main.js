'use strict';

const lang = document.querySelector('.nav__select-lang');
const langList = document.querySelector('.nav__lang-list');
const selectedLang = document.querySelector('.nav__selected-lang');

lang.addEventListener('click', function() {
  const langArrow = document.querySelector('.nav__arrow');

  langList.classList.toggle('nav__lang-list--active');

  langArrow.classList.toggle('nav__arrow--active');
});

langList.addEventListener('click', function(e) {
  if (e.target.classList.contains('nav__lang-item--ua')) {
    selectedLang.textContent = 'UA';
  } else if (e.target.classList.contains('nav__lang-item--eng')) {
    selectedLang.textContent = 'ENG';
  }
});

//  fade in menu

const hamburgerMenu = document.querySelector('.nav__menu');

hamburgerMenu.addEventListener('click', function(e) {
  const headerMenu = document.querySelector('.header__menu');
  const hamburger = document.querySelector('.nav__hamburger');

  headerMenu.classList.toggle('header__menu--active');
  hamburger.classList.toggle('nav__hamburger--active');

  if (document.documentElement.clientWidth <= 768) {
    lang.classList.toggle('nav__select-lang--active');
  }
});
