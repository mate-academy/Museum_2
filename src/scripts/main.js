'use strict';

const header = document.querySelector('.header');
const headerNav = header.querySelector('.nav-menu');
const burger = header.querySelector('.burger');
const headerNavLinks = headerNav.querySelectorAll('.nav-menu__link');
const buttonUp = document.querySelector('.button-up')

function menuToggler(burger, headerNav) {
  burger.classList.toggle('burger--active');
  headerNav.classList.toggle('nav-menu--active');

  if (headerNav.classList.contains('nav-menu--active'))
    document.body.style.overflow = 'hidden';
  else document.body.style.overflow = '';
}

function burgerMenuAction(burger, headerNav) {
  burger.addEventListener('click', () => menuToggler(burger, headerNav));
}

function closeMenuOnLinkClick(headerNavLinks, burger, headerNav) {
  for (let item of headerNavLinks) {
    item.addEventListener('click', () => menuToggler(burger, headerNav));
  }
}

function buttonUpAction(buttonUp) {
  window.addEventListener('scroll',()=>{
    window.scrollY > 100 ? buttonUp.classList.add('button-up--active') : buttonUp.classList.remove('button-up--active')
  })
}


document.addEventListener('DOMContentLoaded', () => {
  burgerMenuAction(burger, headerNav);
  closeMenuOnLinkClick(headerNavLinks, burger, headerNav);
  buttonUpAction(buttonUp)
});


