'use strict';
const htmlTag = document.querySelector('html');

const menuBtnOpen = document.querySelector('.top-bar_burger');
const menuBtnClose = document.querySelector('.top-bar_cross');
const menu = document.querySelector('.sidebar');
const links = document.querySelectorAll('.sidebar_nav_link');

const toTopBtn = document.querySelector('.footer_bottom_to_top');

const form = document.querySelector('.form');

menuBtnOpen.addEventListener('click', function() {
  menu.classList.remove('sidebar--closed');
  htmlTag.classList.add('no-scroll');
});

menuBtnClose.addEventListener('click', closeMenu);

links.forEach(link => {
  link.addEventListener('click', closeMenu);
});

function closeMenu() {
  menu.classList.add('sidebar--closed');
  htmlTag.classList.remove('no-scroll');
}

toTopBtn.addEventListener('click', function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  form.reset();
});
