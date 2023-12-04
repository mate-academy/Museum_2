'use strict';

// upward
const scroll = document.querySelector('.upward');

window.addEventListener('scroll', () => {
  scroll.classList.toggle('upward--active', window.scrollY > 500);
});

scroll.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

// menu

document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menuIcon');
  const closeIcon = document.querySelector('.closeIcon');
  const menu = document.querySelector('.menu');

  menuIcon.addEventListener('click', function() {
    menu.style.display = 'flex';
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  });

  closeIcon.addEventListener('click', function() {
    menu.style.display = 'none';
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  });
});
