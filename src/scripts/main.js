'use strict';

const menuListItems = document.querySelectorAll('.nav__list');
const closeButton = document.querySelector('.icon--close');
const menuButton = document.querySelector('.icon--menu');

document.addEventListener('DOMContentLoaded', function() {
  menuButton.addEventListener('click', function() {
    document.querySelector('.page').style.overflow = 'hidden';
    document.querySelector('.page').classList.add('lock-scrollbar');
  });

  closeButton.addEventListener('click', function() {
    document.querySelector('.page').style.overflow = 'auto';
    document.querySelector('.page').classList.remove('lock-scrollbar');
  });

  menuListItems.forEach(function(item) {
    item.addEventListener('click', function() {
      document.querySelector('.page').style.overflow = 'auto';
      document.querySelector('.page').classList.remove('lock-scrollbar');
    });
  });
});
