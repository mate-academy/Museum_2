'use strict';

const isMobile = {
  Android: () => {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: () => {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: () => {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: () => {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: () => {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: () => {
    return (
      isMobile.Android()
      || isMobile.BlackBerry()
      || isMobile.iOS()
      || isMobile.Opera()
      || isMobile.Windows()
    );
  },
};

const headerContent = document.querySelector('.header__content');
const headerImage = document.querySelector('.header__main-image');
const navigationContent = document.querySelector('.navigation__container');
const menuImage = document.querySelector('.navigation__background-image');
const windowHeight = window.innerHeight;
const mainMenu = document.querySelector('.top-navigation');
const menuOpener = document.querySelector('.top-action__menu-icon--opener');
const menuCloser = document.querySelector('.top-action__menu-icon--closer');
const headerLinks = document.querySelectorAll('.navigation__menu-link');
const body = document.querySelector('.page__body');
const scrolWidth = window.innerWidth - document.body.clientWidth;
const mediaQueryOnDesktop = window.matchMedia('(min-width: 1280px)');
const form = document.querySelector('.subsription__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

if (!mediaQueryOnDesktop.matches) {
  if (headerImage) {
    headerImage.style.height
      = windowHeight - headerContent.offsetHeight - 40 + 'px';
  }

  if (menuImage) {
    menuImage.style.height
      = windowHeight - navigationContent.offsetHeight - 15 + 'px';
  }
}

if (menuOpener) {
  menuOpener.addEventListener('click', (e) => {
    menuOpener.classList.toggle('_active');
    body.classList.toggle('_lock');
    mainMenu.classList.toggle('_open');

    if (!isMobile.any()) {
      if (body.classList.contains('_lock')) {
        body.style.paddingRight = scrolWidth + 'px';
      } else {
        body.style.paddingRight = 0;
      }
    }
  });
}

if (menuCloser) {
  menuCloser.addEventListener('click', (e) => {
    body.classList.toggle('_lock');
    mainMenu.classList.toggle('_open');

    if (!isMobile.any()) {
      if (body.classList.contains('_lock')) {
        body.style.paddingRight = scrolWidth + 'px';
      } else {
        body.style.paddingRight = 0;
      }
    }
  });
}

if (menuCloser) {
  for (let i = 0; i < headerLinks.length; i++) {
    headerLinks[i].addEventListener('click', (e) => {
      body.classList.toggle('_lock');
      mainMenu.classList.toggle('_open');

      if (!isMobile.any()) {
        if (body.classList.contains('_lock')) {
          body.style.paddingRight = scrolWidth + 'px';
        } else {
          body.style.paddingRight = 0;
        }
      }
    });
  }
}
