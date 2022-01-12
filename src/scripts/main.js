'use strict';

const body = document.body;
const burgerMenu = body.querySelector('.burger-menu');
const select = body.querySelector('.header__select');
const currentLeng = select.querySelector('.select__current-leng');
const selectList = select.querySelector('.select__list');
const form = body.querySelector('.subscribe__form');
const emailInput = form.elements.email;
const formButton = form.querySelector('.subscribe__button');
const navLinks = body.querySelectorAll('a[href^="#"');
const animItems = body.querySelectorAll('.anim');

currentLeng.addEventListener('click', () => {
  selectList.classList.toggle('select__list--visible');
});

selectList.addEventListener('click', e => {
  const leng = e.target.closest('.select__leng');

  if (leng) {
    currentLeng.textContent = leng.textContent;
  }
});

body.addEventListener('click', e => {
  if (e.target === currentLeng) {
    return;
  }

  selectList.classList.remove('select__list--visible');
});

burgerMenu.addEventListener('click', menuOpener);

emailInput.addEventListener('input', e => {
  const value = e.target.value.toLowerCase();
  const errorMessage = form.querySelector('.subscribe__error');
  // eslint-disable-next-line max-len
  const validation = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  if (!validation.test(value)) {
    errorMessage.classList.add('subscribe__error--visible');
    formButton.disabled = true;
  } else {
    errorMessage.classList.remove('subscribe__error--visible');
    formButton.disabled = false;
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();
  emailInput.value = '';
  formButton.disabled = true;

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

navLinks.forEach(navLink => {
  navLink.addEventListener('click', function(e) {
    e.preventDefault();

    const href = this.getAttribute('href').slice(1);
    const scrollTarget = document.getElementById(href);
    const headerHeight = body.querySelector('.header').clientHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });

    if (navLink.className.includes('menu')) {
      menuOpener();
    }
  });
});

if (animItems.length > 0) {
  window.addEventListener('scroll', () => {
    animItems.forEach(aminItem => {
      const windowOffset = window.pageYOffset;
      const animItemHeignt = aminItem.offsetHeight;
      const animItemOffset = Math.round(
        aminItem.getBoundingClientRect().top + windowOffset
      );
      const windowHeight = window.innerHeight;
      const animStart = 4;

      let animItemPoint = windowHeight - (animItemHeignt / animStart);

      if (animItemHeignt > windowHeight) {
        animItemPoint = windowHeight - (windowHeight / animStart);
      }

      if (windowOffset > (animItemOffset - animItemPoint)
        && windowOffset < (animItemOffset + animItemHeignt)) {
        aminItem.classList.add('anim--active');
      }
    });
  });
}

function menuOpener() {
  const lines = body.querySelectorAll('.burger-menu__line');
  const menu = body.querySelector('.menu');

  lines.forEach(line => {
    line.classList.toggle('burger-menu__line--active');
  });
  menu.classList.toggle('menu--visible');
  select.classList.toggle('header__select--visible');

  if (menu.className.includes('menu--visible')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'visible';
  }
};
