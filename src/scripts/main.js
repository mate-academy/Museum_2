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

const body = document.querySelector('#body');
const dropdown = document.querySelector('.dropdown-link');
const dropdownSvg = document.querySelector('.dropdown-svg');
const close = document.querySelector('.body-link');
const closeSvg = document.querySelector('.close-svg');
const subscribeForm = document.querySelector('.subscribe__form');
const showsImg = document.querySelectorAll('.for-move');
const scrollUp = document.querySelector('#scroll-up');

window.addEventListener('load', e => {
  if (document.querySelector('.dropdown-menu:target')) {
    dropdown.classList.add('hidden');
    close.classList.remove('hidden');
    dropdown.style.top = 30 + 'px';
    close.style.top = 0;
  };
});

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

  if (e.target.classList.contains('dropdown-menu__link')
    || e.target.classList.contains('menu__logoLink')
    || e.target.classList.contains('button')) {
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
      <= (document.documentElement.clientHeight - 50)) {
      elem.classList.remove('move-l');
      elem.classList.remove('move-r');
    }
  });
});

const scrollEvent = e => {
  if (body.getBoundingClientRect().top >= -700) {
    scrollUp.style.display = 'none';
    window.removeEventListener('scroll', scrollEvent);
    setTimeout(window.addEventListener('scroll', scrollEvent), 3000);
  } else {
    scrollUp.style.display = 'block';
  }
};

window.addEventListener('scroll', scrollEvent);
