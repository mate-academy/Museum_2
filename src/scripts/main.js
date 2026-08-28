'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const asideMenu = document.querySelector('.aside');
  const burgerBtn = document.querySelector('.top-bar__menu-btn');
  const asideBtn = document.querySelector('.aside__menu-btn');

  if (asideBtn && asideMenu && burgerBtn) {
    burgerBtn.addEventListener('click', () => {
      asideMenu.classList.add('aside--open');
      document.body.style.overflow = 'hidden';
    });

    asideBtn.addEventListener('click', () => {
      asideMenu.classList.remove('aside--open');
      document.body.style.overflow = '';
    });
  }

  const asideMenuLinks = document.querySelectorAll('.nav__link');

  asideMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (asideMenu) {
        asideMenu.classList.remove('aside--open');
      }
      document.body.style.overflow = '';
    });
  });

  const subscribeForm = document.querySelector('.subscribe-form');

  if (subscribeForm) {
    subscribeForm.addEventListener('submit', function(event) {
      event.preventDefault();
      subscribeForm.reset();
    });
  }
});
