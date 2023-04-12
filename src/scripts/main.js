'use strict';

const firstEventItem = document.querySelector('#firstEvent');
const secondEventItem = document.querySelector('#secondEvent');
const page = document.querySelector('#page');
const form = document.querySelector('.digest__from');
const headerActions = document.querySelector('.header__actions');
const menuActions = document.querySelector('.menu__actions');

const triggerDelay = 400;

const handleEventItemSlide = (eventItem) => {
  const triggerPoint = eventItem.offsetTop
   + eventItem.offsetHeight - window.innerHeight;

  if (window.pageYOffset > triggerPoint - triggerDelay) {
    eventItem.style.transform = 'translateX(0px)';
    eventItem.style.opacity = 1;
  }
};

window.addEventListener('scroll', () => {
  handleEventItemSlide(firstEventItem);
});

window.addEventListener('scroll', () => {
  handleEventItemSlide(secondEventItem);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formElements = [...form.elements];

  formElements.forEach(element => {
    if (element.type === 'email') {
      element.value = '';
    }
  });
});

window.addEventListener('hashchange', () => {
  const isMenuOpen = window.location.hash === '#menu';

  handleActionsOverlay(isMenuOpen);

  if (isMenuOpen) {
    page.classList.add('page--menu');
  } else {
    page.classList.remove('page--menu');
  }
});

const handleActionsOverlay = (isMenuOpen) => {
  if (isMenuOpen) {
    headerActions.classList.remove('header__actions--open');
    menuActions.classList.add('menu__actions--open');
  } else {
    headerActions.classList.add('header__actions--open');
    menuActions.classList.remove('menu__actions--open');
  }
};
