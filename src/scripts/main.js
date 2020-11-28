'use strict';

const lang = document.querySelector('.nav__select-lang');

lang.addEventListener('click', function() {
  const langList = document.querySelector('.nav__lang-list');
  const langArrow = document.querySelector('.nav__arrow');

  if (langList.classList.contains('nav__lang-list--active')) {
    langList.classList.remove('nav__lang-list--active');
    langArrow.classList.remove('nav__arrow--active');
  } else {
    langList.classList.add('nav__lang-list--active');
    langArrow.classList.add('nav__arrow--active');
  }
});
