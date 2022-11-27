'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#dropdown-menu') {
    setTimeout(() => {
      document.body.classList.add('page__body--with-menu');
    }, 300);
  } else {
    setTimeout(() => {
      document.body.classList.remove('page__body--with-menu');
    }, 300);
  }
});

const dropdown = document.querySelector('.dropdown-link');
const dropdownSvg = document.querySelector('.dropdown-svg');
const close = document.querySelector('.body-link');
const closeSvg = document.querySelector('.close-svg');
const subscribeForm = document.querySelector('.subscribe__form');
const showsImg = document.querySelectorAll('.for-move');

window.addEventListener('click', e => {
  if (e.target === dropdown || e.target === dropdownSvg) {
    dropdown.classList.add('hidden');
    close.classList.remove('hidden');

    setTimeout(() => {
      dropdown.style.top = 30 + 'px';
      close.style.top = 0;
    }, 300);
  };

  if (e.target === close || e.target === closeSvg) {
    close.classList.add('hidden');
    dropdown.classList.remove('hidden');

    setTimeout(() => {
      close.style.top = 30 + 'px';
      dropdown.style.top = 0;
    }, 300);
  }

  if (e.target.classList.contains('dropdown-menu__link')) {
    close.classList.add('hidden');
    dropdown.classList.remove('hidden');

    setTimeout(() => {
      close.style.top = 30 + 'px';
      dropdown.style.top = 0;
    }, 300);
  }
});

subscribeForm.addEventListener('submit', e => {
  e.preventDefault();
  e.target.reset();
});

window.addEventListener('scroll', e => {
  showsImg.forEach(elem => {
    if (elem.getBoundingClientRect().top
      <= document.documentElement.clientHeight) {
      elem.classList.remove('move-l');
      elem.classList.remove('move-r');
    }
  });
});
