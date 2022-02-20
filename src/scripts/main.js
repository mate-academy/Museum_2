'use strict';

const body = document.querySelector('.page__body');
const menuOpener = document.querySelector('.icon--menu-open');
const menuCross = document.querySelector('.icon--cross');
const menuLinks = document.querySelectorAll('.menu__link');

if (menuOpener) {
  menuOpener.addEventListener('click', function(e) {
    if (!body.classList.contains('_active')) {
      document.body.classList.add('_lock');
      body.classList.add('_active');
    }
  });
}

if (menuCross) {
  menuCross.addEventListener('click', function(e) {
    if (body.classList.contains('_active')) {
      document.body.classList.remove('_lock');
      body.classList.remove('_active');
    }
  });

  for (const menuLink of menuLinks) {
    menuLink.addEventListener('click', function(e) {
      if (body.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        body.classList.remove('_active');
      }
    });
  }
}

const selectLeng = function() {
  const selectHeader = document.querySelectorAll('.select__header');
  const selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle);
  });

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle('_active');
  }

  function selectChoose() {
    const leng = this.innerText;
    const select = this.closest('.select');
    const currentLeng = select.querySelector('.select__current');

    currentLeng.innerText = leng;
    select.classList.remove('_active');
  }
};

selectLeng();

// Кнопка вверх
document.addEventListener('DOMContentLoaded', () => {
  const toTopBtn = document.querySelector('.up');

  window.onscroll = function() {
    if (window.pageYOffset > 580) {
      toTopBtn.classList.add('_up-show');
    } else {
      toTopBtn.classList.remove('_up-show');
    }
  };

  // плавный скролл наверх
  toTopBtn.addEventListener('click', function() {
    window.scrollBy({
      top: -document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  });
});
