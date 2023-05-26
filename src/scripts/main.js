'use strict';

const menuDropdowns = document.querySelectorAll('.menu__dropdown--header');
const menuImgs = document.querySelectorAll('.menu__img');
const langUas = document.querySelectorAll('.menu__lang--ua');
const langEns = document.querySelectorAll('.menu__lang--en');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#navigation') {
    document.body.classList.add('page__body--with-navigation');
  } else {
    document.body.classList.remove('page__body--with-navigation');
  }
});

menuDropdowns.forEach((menuDropdown, index) => {
  const menuImg = menuImgs[index];
  const langUa = langUas[index];
  const langEn = langEns[index];
  let visibleLang = langUa;

  menuImg.addEventListener('mouseover', () => {
    langEn.classList.remove('menu__lang--none');
    langUa.classList.remove('menu__lang--none');
  });

  langEn.addEventListener('click', () => {
    visibleLang = langEn;
    langEn.classList.remove('menu__lang--none');
    langUa.classList.add('menu__lang--none');
  });

  langUa.addEventListener('click', () => {
    visibleLang = langUa;
    langUa.classList.remove('menu__lang--none');
    langEn.classList.add('menu__lang--none');
  });

  menuImg.addEventListener('mouseout', () => {
    visibleLang.classList.remove('menu__lang--none');
  });
});
