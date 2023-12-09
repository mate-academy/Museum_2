'use strict';

// upward
const scroll = document.querySelector('.upward');

window.addEventListener('scroll', () => {
  scroll.classList.toggle('upward--active', window.scrollY > 500);
});

scroll.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
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

// dropdown icon

document.addEventListener('DOMContentLoaded', function() {
  const dropdownIcon = document.getElementById('dropdownIcon');
  const dropdownList = document.createElement('ul');

  dropdownList.classList.add('dropdown-list');

  const items = ['PL', 'EN', 'FR'];

  items.forEach(function(itemText) {
    const listItem = document.createElement('li');

    listItem.textContent = itemText;
    dropdownList.appendChild(listItem);
  });

  dropdownIcon.appendChild(dropdownList);

  dropdownIcon.addEventListener('click', function() {
    dropdownList.classList.toggle('visible');
  });
});
