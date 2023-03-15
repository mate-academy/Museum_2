'use strict';

// Nav
window.addEventListener('hashchange', () => {
  const nav = document.querySelector('.nav');

  if (window.location.hash === '#nav') {
    document.body.classList.add('page__body--with-nav');
    nav.style.overflowY = 'auto';
  } else {
    document.body.classList.remove('page__body--with-nav');
    nav.style.overflowY = 'hidden';
  }
});

// Nav image
window.addEventListener('resize', () => {
  const nav = document.querySelector('.nav');
  const tabletMediaQuery = window.matchMedia(
    '(min-width: 640px) and (max-width: 1024px)'
  );

  if (tabletMediaQuery.matches && nav.offsetHeight < 1024) {
    nav.classList.remove('nav--with-after');
  } else {
    nav.classList.add('nav--with-after');
  }
});

// Scroll-up button
const scrollUpButton = document.getElementById('scroll-up-button');

window.onscroll = function() {
  if (document.body.scrollTop > 200
    || document.documentElement.scrollTop > 200) {
    scrollUpButton.classList.add('show');
  } else {
    scrollUpButton.classList.remove('show');
  }
};

scrollUpButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0, behavior: 'smooth',
  });
});

// Language
const navLangs = document.querySelectorAll('.language');

navLangs.forEach(navLang => {
  const navLangShow = navLang.querySelector('.language__show');
  const navLangInner = navLang.querySelector('.language__items');
  const langs = ['UA', 'EN'];

  langs.forEach(item => {
    navLangInner.innerHTML += `
      <span class="language__item">${item}</span>
    `;
  });

  const navLangItems = navLangInner.querySelectorAll('.language__item');

  function activeNavLang(i = 0) {
    navLangShow.prepend(navLangItems[i]);
  }

  function removeNavLang() {
    navLangShow.innerHTML = '';
  }

  removeNavLang();
  activeNavLang();

  navLangInner.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('language__item')) {
      navLangItems.forEach((item, i) => {
        if (e.target === item) {
          navLangItems.forEach(itm => navLangItems[i].replaceWith(itm));
          removeNavLang();
          activeNavLang(i);
        }
      });
    }
  });
});

// Input
const input = document.querySelector('.input');

input.addEventListener('focus', () => {
  input.removeAttribute('placeholder');
});

input.addEventListener('blur', () => {
  if (!input.value) {
    input.setAttribute('placeholder', 'e-mail');
  }
});
